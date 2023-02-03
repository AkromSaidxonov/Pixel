/** @format */

import React from "react";
import { Tabs, Form, Input } from "antd";
import { useParams } from "react-router";
import { FileOutlined, FieldTimeOutlined } from "@ant-design/icons";

import { UseAddTodoList } from "./UseAddTodoList";

const AddTodoList = () => {
  const { id, date } = useParams();
  const { handleAdd } = UseAddTodoList(id, date);

  return (
    <div className="container addTodoList">
      <div className="addTodoList__link">
        <Tabs
          centered
          defaultActiveKey="1"
          items={[
            {
              label: date.slice(0, 10) + " y",
              key: "1",
            },
          ]}
        />
        <div className="addTodoList__form">
          <h1>Add todo item</h1>
          <Form
            name="basic"
            onFinish={handleAdd}
            autoComplete="off"
            layout="vertical"
          >
            <Form.Item
              label="Enter todo"
              name="comment"
              rules={[
                {
                  required: true,
                  message: "Please enter todo!",
                },
              ]}
            >
              <Input
                className="addTodoList__input"
                prefix={<FileOutlined />}
                type="text"
                size="large"
              />
            </Form.Item>
            <Form.Item
              label="Enter start time"
              name="start"
              rules={[
                {
                  required: true,
                  message: "Please enter todo!",
                },
              ]}
            >
              <Input
                className="addTodoList__input"
                required
                prefix={<FieldTimeOutlined />}
                type="time"
                size="large"
              />
            </Form.Item>
            <Form.Item
              label="Enter end time"
              name="end"
              rules={[
                {
                  required: true,
                  message: "Please enter todo!",
                },
              ]}
            >
              <Input
                className="addTodoList__input"
                required
                prefix={<FieldTimeOutlined />}
                type="time"
                size="large"
              />
            </Form.Item>
            <button type="submit">Add</button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AddTodoList;
