/** @format */

import React from "react";
import { Tabs, Spin } from "antd";
import Todo from "../ShowTodo/Todo";
import FinishedTodoView from "../ShowFinshedTodo/FinishedTodoView";
import { UseTodoTabs } from "./UseTodoTabs";

const TodoTabs = () => {
  const { setPag, data, isLoading, disabledTabs } = UseTodoTabs();

  return (
    <Spin tip="Loading" spinning={isLoading}>
      <div className="container todoTabs ">
        <div className="todoTabs__link">
          <Tabs
            className="todoTabs__tabs"
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
                children: <FinishedTodoView data={data} setPag={setPag} />,
                disabled: disabledTabs,
              },
            ]}
          />
        </div>
      </div>
    </Spin>
  );
};

export default TodoTabs;
