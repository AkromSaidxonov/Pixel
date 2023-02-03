import React from "react";
import { Route, Routes } from "react-router-dom";

//
import Main from "../pages/Home/Main";
import Login from "../pages/Auth/Login/Login";
import SignUp from "../pages/Auth/SignUp/SignUp";
import Navbar from "../pages/Navbar/UnForbitten/NavUnForbitten";
import Verify from "../pages/Auth/Verify/Verify";
import RestartPassword from "../pages/Auth/RestartPassword/RestartPassword";

function UnForbitten() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="*" element={<Main />} />
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/reset" element={<RestartPassword />} />
        <Route path="verify/:userEmail" element={<Verify />} />
      </Routes>
    </>
  );
}

export default UnForbitten;
