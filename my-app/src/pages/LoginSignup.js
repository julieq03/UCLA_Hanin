import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Auth from "../components/Auth";
import userPool from "../service/userPool";

function LoginSignup({ userRepository }) {
  const [users, setUsers] = useState([]);

  // const [userId, setUserId] = useState("100");

  const createUser = (user) => {
    const updated = { ...users };
    updated[user.id] = user;
    setUsers(updated);
    console.log("user added : ", user);
    userRepository.saveUser("userList", user);

    // userPool.signUp(user.email, user.password, [], [], (err, data) => {
    //   if (err) {
    //     return console.error(err);
    //   }
    //   alert("가입완료! 이메일 인증 후 로그인 하세요.");
    //   // gologinBtn.current?.click();
    // });
  };
  const deleteUser = (user) => {
    const updated = { ...users };
    delete updated[user.id];
    setUsers(updated);
    userRepository.removeUser("userList", user);
  };

  return (
    <React.Fragment>
      <Navbar />
      <Auth onAdd={createUser} deleteUser={deleteUser} />
      <Footer />
    </React.Fragment>
  );
}

export default LoginSignup;
