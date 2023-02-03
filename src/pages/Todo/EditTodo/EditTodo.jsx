/** @format */

import React, { useState, useEffect } from "react";
import { Tabs } from "antd";
import { useParams } from "react-router";
import { Input, Form } from "antd";
import { UseEditTodo } from "./UseEditTodo";

const Edit = () => {
  const { id, date } = useParams();
  const { handleEdit } = UseEditTodo(id);

  const configTabs = [
    {
      label: "Edit todo " + date.slice(0, 10) + " y",
      key: "1",
    },
  ];
  return (
    <div className="container editTodo">
      <div className="editTodo__link">
        <Tabs defaultActiveKey="1" items={configTabs} />
        <div className="editTodo__form">
          <h1>Edit todo</h1>
          <Form name="basic" onFinish={handleEdit} autoComplete="off">
            <Form.Item
              label="Enter date"
              name="date"
              rules={[
                {
                  required: true,
                  message: "Please enter date!",
                },
              ]}
              initialValue={date}
            >
              <Input
                className="editTodo__input"
                placeholder="Enter editdate"
                type="date"
                size="large"
              />
            </Form.Item>
            <button type="submit">Edit</button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Edit;
