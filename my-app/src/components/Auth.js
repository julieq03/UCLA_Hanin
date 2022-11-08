import React, { useState, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import userPool from "../service/userPool";
import { AccountContext } from "./Account";
import Signup from "./Signup";
import Login from "./Login";
import VerifyEmail from "./VerifyEmail";

const Auth = ({ onAdd }) => {
  let [authMode, setAuthMode] = useState("signin");
  let [cognitoUser, setCognitoUser] = useState("");
  let [user, setUser] = useState(null);
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  const changeAuthMode = (mode) => {
    setAuthMode(mode);
    // setAuthMode(authMode === "signin" ? "signup" : "signin");
  };

  // const { authenticate } = useContext(AccountContext); //deconstructioning

  // const { name, uid, major, email, password } = useState(""); //deconstructioning이용!
  const formRef = useRef();
  const nameRef = useRef();
  const uidRef = useRef();
  const majorRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const vcodeRef = useRef();

  // const onSignup = (event) => {
  //   event.preventDefault();
  //   const user = {
  //     id: Date.now(), //uuid
  //     name: nameRef.current.value || "",
  //     uid: uidRef.current.value || "",
  //     major: majorRef.current.value || "",
  //     email: emailRef.current.value || "",
  //     // password: passwordRef.current.value || "",
  //   };
  //   setUser(user);

  //   userPool.signUp(
  //     emailRef.current.value,
  //     passwordRef.current.value,
  //     null,
  //     null,
  //     (err, data) => {
  //       if (err) {
  //         return console.error(err);
  //       }
  //       setCognitoUser(data.user);
  //       // navigateVerificationEmail();
  //       setAuthMode("verifyEmail");
  //     }
  //   );
  // };

  // const onVerify = (e) => {
  //   e.preventDefault();

  //   let verificationCode = vcodeRef.current.value;
  //   // console.log("verificationCode : ", verificationCode);

  //   cognitoUser.confirmRegistration(
  //     verificationCode,
  //     true,
  //     function (err, result) {
  //       if (err) {
  //         alert(err);
  //         return;
  //       }

  //       alert("인증완료! 다시 로그인 해 주세요");
  //       onAdd(user);
  //       // console.log("user: ", user);
  //       navigateHome();
  //     }
  //   );
  // };

  // const onLogin = (e) => {
  //   e.preventDefault();

  //   const user = new CognitoUser({ Username: email, Pool: userPool });
  //   const authDetails = new AuthenticationDetails({
  //     Username: email,
  //     Password: password,
  //   });

  //   user.authenticateUser(authDetails, {
  //     onSuccess: (data) => {
  //       console.log("onSuccess: ", data);
  //     },
  //     onFailure: (err) => {
  //       console.error("onFailure: ", err);
  //     },
  //     newPasswordRequired: (data) => {
  //       console.log("newPasswordRequired: ", data);
  //     },
  //   });
  // };

  if (authMode === "signin") {
    return <Login changeAuthMode={changeAuthMode} />;
  } else if (authMode === "signup") {
    return (
      <Signup
        onAdd={onAdd}
        changeAuthMode={changeAuthMode}
        setUser={setUser}
        setCognitoUser={setCognitoUser}
      />
    );
  } else if (authMode === "verifyEmail") {
    return (
      <VerifyEmail onAdd={onAdd} currentUser={user} cognitoUser={cognitoUser} />
    );
  }

  // if (authMode === "signin") {
  //   return (
  //     <div className="Auth-form-container">
  //       <form ref={formRef} className="Auth-form">
  //         <div className="Auth-form-content">
  //           <h3 className="Auth-form-title">Sign In</h3>
  //           <div className="text-center">
  //             Not registered yet?{" "}
  //             <span className="link-primary" onClick={changeAuthMode}>
  //               Sign Up
  //             </span>
  //           </div>
  //           <div className="form-group mt-3">
  //             <label>Email address</label>
  //             <input
  //               type="email"
  //               className="form-control mt-1"
  //               placeholder="Enter email"
  //               onChange={(e) => {
  //                 setEmail(e.target.value);
  //               }}
  //             />
  //           </div>
  //           <div className="form-group mt-3">
  //             <label>Password</label>
  //             <input
  //               type="password"
  //               className="form-control mt-1"
  //               placeholder="Enter password"
  //               onChange={(e) => {
  //                 setPassword(e.target.value);
  //               }}
  //             />
  //           </div>
  //           <div className="d-grid gap-2 mt-3">
  //             <button
  //               type="submit"
  //               className="btn btn-primary"
  //               onClick={onLogin}
  //             >
  //               Submit
  //             </button>
  //           </div>
  //           <p className="text-center mt-2">
  //             Forgot <a href="#">password?</a>
  //           </p>
  //         </div>
  //       </form>
  //     </div>
  //   );
  // } else if (authMode === "signup") {
  //   return (
  //     <div className="Auth-form-container">
  //       <form className="Auth-form">
  //         <div className="Auth-form-content">
  //           <h3 className="Auth-form-title">Sign Up</h3>
  //           <div className="text-center">
  //             Already registered?{" "}
  //             <span className="link-primary" onClick={changeAuthMode}>
  //               Sign In
  //             </span>
  //           </div>
  //           <div className="form-group mt-3">
  //             <label>Full Name</label>
  //             <input
  //               ref={nameRef}
  //               type="text"
  //               className="form-control mt-1"
  //               placeholder="e.g Danny Lee"
  //             />
  //           </div>
  //           <div className="form-group mt-3">
  //             <label>UID</label>
  //             <input
  //               ref={uidRef}
  //               type="text"
  //               className="form-control mt-1"
  //               placeholder="e.g 105128000"
  //             />
  //           </div>
  //           <div className="form-group mt-3">
  //             <label>Major</label>
  //             <input
  //               ref={majorRef}
  //               type="text"
  //               className="form-control mt-1"
  //               placeholder="e.g Computer Science"
  //             />
  //           </div>
  //           <div className="form-group mt-3">
  //             <label>Email address</label>
  //             <input
  //               ref={emailRef}
  //               type="text"
  //               className="form-control mt-1"
  //               placeholder="Email Address"
  //             />
  //           </div>
  //           <div className="form-group mt-3">
  //             <label>Password</label>
  //             <input
  //               ref={passwordRef}
  //               type="password"
  //               className="form-control mt-1"
  //               placeholder="Password"
  //             />
  //           </div>
  //           <div className="d-grid gap-2 mt-3">
  //             <button
  //               type="submit"
  //               className="btn btn-primary"
  //               onClick={onSignup}
  //             >
  //               Submit
  //             </button>
  //           </div>
  //           <p className="text-center mt-2">
  //             Forgot <a href="#">password?</a>
  //           </p>
  //         </div>
  //       </form>
  //     </div>
  //   );
  // } else if (authMode === "verifyEmail") {
  //   return (
  //     <div className="Auth-form-container">
  //       <form ref={formRef} className="Auth-form">
  //         <div className="Auth-form-content">
  //           <h3 className="Auth-form-title">Email Verification</h3>
  //           <div className="form-group mt-3">
  //             <label>Verification Code</label>
  //             <br />
  //             <span>We have sent a verification code to your email.</span>
  //             <br />
  //             <span>{user.email}</span>
  //             <input
  //               ref={vcodeRef}
  //               type="text"
  //               className="form-control mt-1"
  //               placeholder="Type your verification code here."
  //             />
  //           </div>
  //           <div className="d-grid gap-2 mt-3">
  //             <button
  //               type="submit"
  //               className="btn btn-primary"
  //               onClick={onVerify}
  //             >
  //               Submit
  //             </button>
  //           </div>
  //           <p className="text-center mt-2">
  //             Forgot <a href="#">password?</a>
  //           </p>
  //         </div>
  //       </form>
  //     </div>
  //   );
  // }
};

export default Auth;
