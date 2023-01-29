/** @format */

import React, { useState } from "react";
import { Input } from "antd";
import { FileOutlined, FieldTimeOutlined } from "@ant-design/icons";
import { useAddTodoMutation } from "../../redux/todo/todo";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const AddTodo = () => {
  const [addTodo, { isSuccess, data }] = useAddTodoMutation();

  const [dateTodo, setDateTodo] = useState();
  const [comment, setComment] = useState();
  const [start, setStart] = useState();
  const [end, setEnd] = useState();
  const navigate = useNavigate();
  const todoData = {
    date: dateTodo,
    finished: false,
    toDoLists: [
      {
        timeStart: start + ":00",
        timeFinish: end + ":00",
        comment: comment,
        finished: false,
      },
    ],
  };

  const handleAdd = () => {
    isSuccess
      ? toast.success(data?.responseText)
      : toast.error(data?.responseText);
    navigate("/todo");
    addTodo(todoData);
    setDateTodo("");
    setComment("");
    setStart("");
    setEnd("");
  };

  return (
    <div className=" addTodo">
      <div className="addTodo__form">
        <h1>Add todo </h1>
        <Input
          className="addTodo__input"
          required
          placeholder="Enter comment todo"
          type="date"
          size="large"
          name="date"
          value={dateTodo}
          onChange={(e) => setDateTodo(e.target.value)}
        />
        <Input
          className="addTodo__input"
          required
          placeholder="Enter comment todo"
          prefix={<FileOutlined />}
          type="text"
          size="large"
          name="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <h5>Enter start time</h5>
        <Input
          className="addTodo__input"
          required
          prefix={<FieldTimeOutlined />}
          type="time"
          size="large"
          name="comment"
          value={start}
          onChange={(e) => setStart(e.target.value)}
        />
        <h5>Enter end time</h5>
        <Input
          className="addTodo__input"
          required
          prefix={<FieldTimeOutlined />}
          type="time"
          size="large"
          name="comment"
          value={end}
          onChange={(e) => setEnd(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
      </div>
    </div>
  );
};

export default AddTodo;
