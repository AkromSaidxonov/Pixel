/** @format */

import React from "react";
import { Input, Button, Form } from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { UseSignUp } from "./UseSignUp";

const SignUp = () => {
  const { handleSignUp, isLoading, handleCheckValueConfirm } = UseSignUp();
  return (
    <div className="signup">
      <div className="signup__form">
        <div className="signup__title">
          <h1>
            Sign-up to <span>Pixel</span>{" "}
          </h1>
        </div>
        <Form
          name="Sign-up"
          layout="vertical"
          onFinish={handleSignUp}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="name"
            rules={[
              {
                required: true,
                message: "Please enter your username!",
              },
            ]}
          >
            <Input
              className="signup__input"
              prefix={<UserOutlined />}
              type="text"
              size="large"
            />
          </Form.Item>
          <Form.Item
            label="Enter email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please enter your email!",
              },
            ]}
          >
            <Input
              className="signup__input"
              prefix={<MailOutlined />}
              type="email"
              size="large"
            />
          </Form.Item>
          <Form.Item
            label="Enter password"
            name="password"
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please enter your password!",
              },
            ]}
          >
            <Input
              className="signup__input"
              size="large"
              prefix={<LockOutlined />}
              type="password"
            />
          </Form.Item>
          <Form.Item
            label="Confirm password"
            name="confirmPassword"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              handleCheckValueConfirm,
            ]}
          >
            <Input
              className="signup__input"
              size="large"
              prefix={<LockOutlined />}
              type="password"
            />
          </Form.Item>
          <div className="signup__button">
            <Button loading={isLoading} htmlType="submit">
              Sign-up
            </Button>
          </div>
          <div className="signup__links">
            <h4>or</h4>
            <Link to="/login">Log-in</Link>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default SignUp;
