/** @format */

import React from "react";
import { Input, Button, Form } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useParams } from "react-router-dom";
import { UseVerify } from "./UseVerify";

const Verify = () => {
  const { userEmail } = useParams();
  const { isLoading, handleVerify, handleCheckValueCode } =
    UseVerify(userEmail);

  return (
    <div className="verify">
      <div className="verify__form">
        <div className="verify__title">
          <p>
            Code sent <span>{userEmail}</span>{" "}
          </p>
        </div>
        <Form
          name="basic"
          layout="vertical"
          onFinish={handleVerify}
          autoComplete="off"
        >
          <Form.Item
            label="Enter code"
            name="code"
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
              handleCheckValueCode,
            ]}
          >
            <Input
              className="verify__input"
              prefix={<UserOutlined />}
              type="number"
              size="large"
            />
          </Form.Item>
          <div className="verify__button">
            <Button htmlType="submit" loading={isLoading} type="submit">
              Sent
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Verify;
