import React from "react";
import { Route, Routes } from "react-router-dom";

//
import Main from "../pages/Home/Main";
import Login from "../pages/Auth/Login";
import SignUp from "../pages/Auth/SignUp";
import Reset from "../pages/Auth/Reset";
import Verify from "../pages/Auth/Verify";
import Navbar from "../pages/Navbar/Navbar";

function UnForbitten() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="*" element={<Main />} />
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="verify/:userEmail" element={<Verify />} />
      </Routes>
    </>
  );
}

export default UnForbitten;
