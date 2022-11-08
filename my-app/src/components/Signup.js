import React, { useState, useRef, useContext } from "react";
import userPool from "../service/userPool";
import { useNavigate } from "react-router-dom";

const Signup = ({ onAdd, changeAuthMode, setUser, setCognitoUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let [authMode, setAuthMode] = useState("signup");

  const formRef = useRef();
  const nameRef = useRef();
  const uidRef = useRef();
  const majorRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const vcodeRef = useRef();
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate("/");
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const user = {
      id: Date.now(), //uuid
      name: nameRef.current.value || "",
      uid: uidRef.current.value || "",
      major: majorRef.current.value || "",
      email: emailRef.current.value || "",
      // password: passwordRef.current.value || "",
    };
    setUser(user);
    console.log("@signup, setting user: ", user);

    userPool.signUp(
      emailRef.current.value,
      passwordRef.current.value,
      [],
      null,
      (err, data) => {
        if (err) {
          return console.error(err);
        }

        changeAuthMode("verifyEmail");
        setCognitoUser(data.user);
      }
    );
  };

  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Up</h3>
          <div className="text-center">
            Already registered?{" "}
            <span
              className="link-primary"
              onClick={() => {
                changeAuthMode("signin");
              }}
            >
              Sign In
            </span>
          </div>
          <div className="form-group mt-3">
            <label>Full Name</label>
            <input
              ref={nameRef}
              type="text"
              className="form-control mt-1"
              placeholder="e.g Danny Lee"
            />
          </div>
          <div className="form-group mt-3">
            <label>UID</label>
            <input
              ref={uidRef}
              type="text"
              className="form-control mt-1"
              placeholder="e.g 105128000"
            />
          </div>
          <div className="form-group mt-3">
            <label>Major</label>
            <input
              ref={majorRef}
              type="text"
              className="form-control mt-1"
              placeholder="e.g Computer Science"
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              ref={emailRef}
              type="text"
              className="form-control mt-1"
              placeholder="Email Address"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              ref={passwordRef}
              type="password"
              className="form-control mt-1"
              placeholder="Password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={onSubmit}
            >
              Submit
            </button>
          </div>
          <p className="text-center mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Signup;
