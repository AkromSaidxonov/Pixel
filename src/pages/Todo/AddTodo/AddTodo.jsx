/** @format */

import React from "react";
import { Input, Form, Button } from "antd";
import { FileOutlined, FieldTimeOutlined } from "@ant-design/icons";
import { UseAddTodo } from "./UseAddTodo";

const AddTodo = () => {
  const { handleAdd, isLoading, today } = UseAddTodo();
  return (
    <div className=" addTodo">
      <div className="addTodo__form">
        <h1>Add todo </h1>
        <Form
          name="addTodo"
          initialValues={{
            remember: true,
          }}
          layout="vertical"
          onFinish={handleAdd}
          autoComplete="off"
        >
          <Form.Item
            label="Enter date"
            name="dateTodo"
            rules={[
              {
                required: true,
                message: "Please enter date!",
              },
            ]}
          >
            <Input
              className="addTodo__input"
              type="date"
              size="large"
              min={today}
            />
          </Form.Item>
          <Form.Item
            label="Enter Todo comment"
            name="comment"
            rules={[
              {
                required: true,
                message: "Please enter your comment!",
              },
            ]}
          >
            <Input
              className="addTodo__input"
              placeholder="Enter comment todo"
              prefix={<FileOutlined />}
              type="text"
              size="large"
            />
          </Form.Item>
          <Form.Item
            label="Enter start time"
            name="startTime"
            rules={[
              {
                required: true,
                message: "Please enter time!",
              },
            ]}
          >
            <Input
              className="addTodo__input"
              prefix={<FieldTimeOutlined />}
              type="time"
              size="large"
            />
          </Form.Item>
          <Form.Item
            label="Enter end time"
            name="endTime"
            rules={[
              {
                required: true,
                message: "Please enter time!!",
              },
            ]}
          >
            <Input
              className="addTodo__input"
              prefix={<FieldTimeOutlined />}
              type="time"
              size="large"
            />
          </Form.Item>
          <Button
            htmlType="submit"
            loading={isLoading}
            className="addTodo__button"
          >
            Add
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default AddTodo;
