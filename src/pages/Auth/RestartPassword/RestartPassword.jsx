/** @format */

import React from "react";
import { Input, Button, Form } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { UseResetPassword } from "./UseRestartPassword";

const RestartPassword = () => {
  const { isLoading, handleSendEmailCode } = UseResetPassword();

  return (
    <div className="reset">
      <div className="reset__form">
        <div className="reset__title">
          <h1>
            Enter your <span>Email</span>{" "}
          </h1>
        </div>
        <Form
          name="RetartPassword"
          onFinish={handleSendEmailCode}
          autoComplete="off"
        >
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please enter your email!",
              },
            ]}
          >
            <Input
              className="reset__input"
              prefix={<UserOutlined />}
              type="email"
              size="large"
            />
          </Form.Item>

          <div className="reset__button">
            <Button htmlType="submit" loading={isLoading}>
              Send
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default RestartPassword;
