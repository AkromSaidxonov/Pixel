/** @format */

import React, { useState, useEffect } from "react";
import { Input, Button } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import { toast } from "react-toastify";
import { useLoginMutation } from "../../redux/auth/authApi";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToken } from "../../redux/auth/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [fetch, { isLoading }] = useLoginMutation();
  const userData = {
    userName: email,
    password: password,
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await fetch(userData).unwrap();
      dispatch(setToken(data.token));
      data && window.localStorage.setItem("token", data.token);
      data && window.localStorage.setItem("userEmail", email);
      navigate("/");
    } catch (err) {
      if (!err?.originalStatus) {
        // isLoading: true until timeout occurs
        toast.error("No Server Response");
      } else if (err.originalStatus === 400) {
        toast.error("Missing Username or Password");
      } else if (err.originalStatus === 401) {
        toast.error("Unauthorized");
      } else {
        toast.error("Login Failed");
      }
    }
  };

  return (
    <div className="login">
      <div className="login__form">
        <div className="login__title">
          <h1>
            Log-in to <span>Pixel</span>{" "}
          </h1>
        </div>
        <form onSubmit={handleLogin}>
          <Input
            className="login__input"
            required
            placeholder="Enter email"
            prefix={<MailOutlined />}
            type="email"
            size="large"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            className="login__input"
            required
            size="large"
            placeholder="Password"
            prefix={<LockOutlined />}
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="login__reset">
            <Link to="/reset">Forgot password</Link>
          </div>
          <div className="login__button">
            {isLoading !== true ? (
              <button type="submit">Log-in</button>
            ) : (
              <Button loading type="submit">
                Log-in
              </Button>
            )}
          </div>
          <div className="login__links">
            <h4>or</h4>
            <Link to="/signup">Sign-up</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
