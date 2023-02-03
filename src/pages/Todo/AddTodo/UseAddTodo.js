import React, { useState } from "react";
import { useAddTodoMutation } from "../../../common/store/todo/todoApi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

export const UseAddTodo = () => {
  const navigate = useNavigate();
  const [addTodo, { isLoading, error, isError, isSuccess }] =
    useAddTodoMutation();
  const date = new Date();
  const today = date.toJSON().slice(0, 10);
  console.log(error);
  if (error !== undefined) {
    toast.error(error?.data?.responseText);
  } else if (isSuccess == true) {
    toast.success("Todo added");
  }
  const handleAdd = async (valeu) => {
    const todoData = {
      date: valeu.dateTodo,
      finished: false,
      toDoLists: [
        {
          timeStart: valeu.startTime + ":00",
          timeFinish: valeu.endTime + ":00",
          comment: valeu.comment,
          finished: false,
        },
      ],
    };
    await addTodo(todoData);

    navigate("/todo");
  };

  return { handleAdd, isLoading, today };
};
