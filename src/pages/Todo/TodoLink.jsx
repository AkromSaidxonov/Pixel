/** @format */

import React, {useState} from "react";
import { Tabs } from "antd";
import Todo from "./Todo";
import FinishedTodo from "./FinishedTodo";
import { useGetTodoFinishedQuery } from "../../redux/todo/todo";
import AddTodo from "../../components/Todo/AddTodo";
import { Routes, Router, Route } from "react-router";

const TodoLink = () => {
  const [pag, setPag] = useState(0);
  
  const { data } = useGetTodoFinishedQuery(pag);

  return (
    <div className="container todoLink">
      <div className="todoLink__link">
        <Tabs
          centered
          animated={true}
          items={[
            {
              label: "Todos",
              key: "1",
              children: <Todo />,
            },
            {
              label: "Finished todos",
              key: "2",
              children: <FinishedTodo data={data} setPag={setPag} />,
              disabled: data && data.responseText === "Empty" ? true : false,
            },
          ]}
        />
      </div>
    </div>
  );
};

export default TodoLink;
