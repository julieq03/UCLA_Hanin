import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Auth from "../components/Auth";

function LoginSignup({ userRepository }) {
  const [users, setUsers] = useState({
    1: {
      id: "1",
      name: "Danny0",
      UID: "105128998",
      major: "computer science",
      email: "seunghoonlee95@gmail.com",
      password: "qwe123",
    },
    2: {
      id: "2",
      name: "Danny1",
      UID: "105128998",
      major: "computer science",
      email: "seunghoonlee95@gmail.com",
      password: "qwe123",
    },
    3: {
      id: "3",
      name: "Danny2",
      UID: "105128998",
      major: "computer science",
      email: "seunghoonlee95@gmail.com",
      password: "qwe123",
    },
  });

  const [userId, setUserId] = useState("100");

  const createUser = (user) => {
    const updated = { ...users };
    updated[user.id] = user;
    setUsers(updated);
    console.log("user added : ", user);
    userRepository.saveUser(userId, user);
  };
  const deleteUser = (user) => {
    const updated = { ...users };
    delete updated[user.id];
    setUsers(updated);
    userRepository.removeUser(userId, user);
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
