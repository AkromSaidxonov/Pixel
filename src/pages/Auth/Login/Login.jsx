/** @format */

import React from "react";
import { Input, Button, Form } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { UseLogin } from "./UseLogin";

const Login = () => {
  const { isLoading, handleLogin } = UseLogin();
  return (
    <div className="login">
      <div className="login__form">
        <div className="login__title">
          <h1>
            Log-in to <span>Pixel</span>{" "}
          </h1>
        </div>
        <Form
          name="Log-in"
          layout="vertical"
          onFinish={handleLogin}
          autoComplete="off"
        >
          <Form.Item
            label="Enter your email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please enter your email!",
              },
            ]}
          >
            <Input
              className="login__input"
              prefix={<MailOutlined />}
              type="email"
              size="large"
            />
          </Form.Item>
          <Form.Item
            label="Enter your email"
            name="password"
            rules={[
              {
                required: true,
                message: "Please enter password!",
              },
            ]}
          >
            <Input
              className="login__input"
              prefix={<LockOutlined />}
              type="password"
              size="large"
            />
          </Form.Item>
          <div className="login__reset">
            <Link to="/reset">Forgot password</Link>
          </div>
          <div className="login__button">
            <Button htmlType="submit" loading={isLoading} type="submit">
              Log-in
            </Button>
          </div>
          <div className="login__links">
            <h4>or</h4>
            <Link to="/signup">Sign-up</Link>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
