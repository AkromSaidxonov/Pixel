/** @format */

import React from "react";
import { Tabs, Input, Form } from "antd";
import { useParams } from "react-router";
import { UseEditTodoList } from "./UseEditTodoList";

const EditTodoList = () => {
  const { id, idItem } = useParams();
  const { handleAdd } = UseEditTodoList(id, idItem);

  return (
    <div className="container editTodoList">
      <div className="editTodoList__link">
        <Tabs
          defaultActiveKey="1"
          items={[
            {
              label: "Edit todo item ",
              key: "1",
            },
          ]}
        />
        <div className="editTodoList__form">
          <h1>Edit todo item</h1>
          <Form
            name="basic"
            layout="vertical"
            onFinish={handleAdd}
            autoComplete="off"
          >
            <Form.Item
              label="Enter comment todolist"
              name="comment"
              rules={[
                {
                  required: true,
                  message: "Enter comment todolist!",
                },
              ]}
            >
              <Input className="editTodo__input" type="text" size="large" />
            </Form.Item>
            <Form.Item
              label="Enter start time"
              name="start"
              rules={[
                {
                  required: true,
                  message: "Enter start time",
                },
              ]}
            >
              <Input className="editTodo__input" type="time" size="large" />
            </Form.Item>
            <Form.Item
              label="Enter end time"
              name="end"
              rules={[
                {
                  required: true,
                  message: "Enter end time",
                },
              ]}
            >
              <Input className="editTodo__input" type="time" size="large" />
            </Form.Item>
            <button type="submit">Edit</button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default EditTodoList;
