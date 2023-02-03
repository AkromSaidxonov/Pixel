import React from "react";
import { Input, Button, Form, Spin } from "antd";
import { UseDeleteUser } from "./UseDeleteUser";

function DeleteUser() {
  const { isLoading, handleDeleteUser } = UseDeleteUser();
  const email = localStorage.getItem("userEmail");

  return (
    <Spin tip="Loading" spinning={isLoading}>
      <div className="deleteUser">
        <div className="deleteUser__item">
          <p>
            Code sent <span>{email}</span>{" "}
          </p>
          <Form
            name="Delete accaunt"
            layout="vertical"
            onFinish={handleDeleteUser}
            autoComplete="off"
            className="deleteUser__form"
          >
            <Form.Item
              label="Enter password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input className="deleteUser__input" type="number" size="large" />
            </Form.Item>
            <Form.Item
              label="Enter code"
              name="code"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input className="deleteUser__input" type="number" size="large" />{" "}
              <Button loading={isLoading} htmlType="submit">
                Sent
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </Spin>
  );
}

export default DeleteUser;
