// import React, { useState, useRef } from "react";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import userPool from "../service/userPool";

// function EmailVerification() {
//   const formRef = useRef();
//   const vcodeRef = useRef();

//   const confirmUser = (e) => {
//     e.preventDefault();
//     let verificationCode = vcodeRef.current.value;

//     cognitoUser.confirmRegistration(
//       verificationCode,
//       true,
//       function (err, result) {
//         if (err) {
//           alert(err);
//           return;
//         }

//         alert("verification success");
//       }
//     );
//   };

//   const onSubmit = (event) => {
//     event.preventDefault();
//   };

//   return (
//     <React.Fragment>
//       <Navbar />
//       <div className="Auth-form-container">
//         <form ref={formRef} className="Auth-form">
//           <div className="Auth-form-content">
//             <h3 className="Auth-form-title">Email Verification</h3>
//             <div className="form-group mt-3">
//               <label>Verification Code</label>
//               <input
//                 ref={vcodeRef}
//                 type="text"
//                 className="form-control mt-1"
//                 placeholder="Type your verification code here."
//               />
//             </div>
//             <div className="d-grid gap-2 mt-3">
//               <button
//                 type="submit"
//                 className="btn btn-primary"
//                 onClick={onSubmit}
//               >
//                 Submit
//               </button>
//             </div>
//             <p className="text-center mt-2">
//               Forgot <a href="#">password?</a>
//             </p>
//           </div>
//         </form>
//       </div>
//       );
//       <Footer />
//     </React.Fragment>
//   );
// }

// export default EmailVerification;
