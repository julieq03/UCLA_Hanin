import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import userPool from "../service/userPool";

const Auth = ({ onAdd }) => {
  let [authMode, setAuthMode] = useState("signin");
  let [cognitoUser, setCognitoUser] = useState("");
  // const { name, uid, major, email, password } = useState(""); //deconstructiong이용!
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

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin");
  };

  const onSignup = (event) => {
    event.preventDefault();
    const user = {
      id: Date.now(), //uuid
      name: nameRef.current.value || "",
      uid: uidRef.current.value || "",
      major: majorRef.current.value || "",
      email: emailRef.current.value || "",
      passwordRef: passwordRef.current.value || "",
    };
    // formRef.current.reset();

    userPool.signUp(
      emailRef.current.value,
      passwordRef.current.value,
      null,
      null,
      (err, data) => {
        if (err) {
          return console.error(err);
        }
        setCognitoUser(data.user);
        // navigateVerificationEmail();
        setAuthMode("verifyEmail");
      }
    );

    onAdd(user);
  };

  const onVerify = (e) => {
    e.preventDefault();
    let verificationCode = vcodeRef.current.value;

    cognitoUser.confirmRegistration(
      verificationCode,
      true,
      function (err, result) {
        if (err) {
          alert(err);
          return;
        }

        alert("인증완료! 다시 로그인 해 주세요");
        navigateHome();
      }
    );
  };

  if (authMode === "signin") {
    return (
      <div className="Auth-form-container">
        <form ref={formRef} className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="text-center">
              Not registered yet?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                Sign Up
              </span>
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
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
  } else if (authMode === "signup") {
    return (
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign Up</h3>
            <div className="text-center">
              Already registered?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
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
                onClick={onSignup}
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
  } else if (authMode === "verifyEmail") {
    return (
      <div className="Auth-form-container">
        <form ref={formRef} className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Email Verification</h3>
            <div className="form-group mt-3">
              <label>Verification Code</label>
              <br />
              <span>We have sent a verification code to your email.</span>
              <br />
              <span>{emailRef.current.value}</span>
              <input
                ref={vcodeRef}
                type="text"
                className="form-control mt-1"
                placeholder="Type your verification code here."
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={onVerify}
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
  }
};

export default Auth;
