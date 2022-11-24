/** @format */

import React, { useState, useEffect } from "react";
import { Tabs } from "antd";
import { useParams } from "react-router";
import { Input } from "antd";
import { useEditTodoListMutation } from "../../redux/todo/todoList";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
const EditTodoList = () => {
  const [editTodoList, { isSuccess, error }] = useEditTodoListMutation();
  const { id, idItem, date } = useParams();
  const [comment, setComment] = useState();
  const [start, setStart] = useState();
  const [end, setEnd] = useState();
  const navigate = useNavigate();
  console.log("todo id:" + id + "todoitem id:" + idItem);
  const todoListData = {
    basicId: id,
    toDoLists: [
      {
        id: idItem,
        timeStart: start + ":00",
        timeFinish: end + ":00",
        comment: comment,
        finished: false,
      },
    ],
  };
  const handleAdd = async () => {
    await editTodoList(todoListData);
    isSuccess === true && toast.success("Todo item edited");
    error && toast.error(error.data.responseText);
    navigate(-1);
  };

  return (
    <div className="container editTodo">
      <div className="editTodo__link">
        <Tabs
          defaultActiveKey="1"
          items={[
            {
              label: "Edit todo item ",
              key: "1",
            },
          ]}
        />
        <div className="editTodo__form">
          <h1>Edit todo item</h1>
          <Input
            className="editTodo__input"
            required
            placeholder="Enter edit comment"
            type="text"
            size="large"
            name="date"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <Input
            className="editTodo__input"
            required
            placeholder="Enter start time"
            type="time"
            size="large"
            name="start"
            value={start}
            onChange={(e) => setStart(e.target.value)}
          />
          <Input
            className="editTodo__input"
            required
            placeholder="Finsh time"
            type="time"
            size="large"
            name="end"
            value={end}
            onChange={(e) => setEnd(e.target.value)}
          />

          <button onClick={handleAdd}>Edit</button>
        </div>
      </div>
    </div>
  );
};

export default EditTodoList;
