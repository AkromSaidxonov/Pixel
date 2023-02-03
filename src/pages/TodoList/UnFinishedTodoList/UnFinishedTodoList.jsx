import React from "react";
import { Tabs, Spin } from "antd";
import { useParams } from "react-router";
import { UseUnFinishedTodoLIst } from "./UseUnFinishedTodoList";

const UnFinishedTodoList = () => {
  const { id, date } = useParams();
  const { UnFinishedTodoData, isLoading, addTodoList } = UseUnFinishedTodoLIst(
    id,
    date
  );
  return (
    <Spin tip="Loading" spinning={isLoading}>
      <div className="container showTodoList">
        <div className="showTodoList__link">
          <Tabs
            defaultActiveKey="1"
            items={[
              {
                label: "Todo item list",
                key: "1",
              },
            ]}
          />
          <div className="showTodoList__title">
            <h1>{date.slice(0, 10) + " y"}</h1>
            <h1 onClick={addTodoList}>Add todo list</h1>
          </div>
          <div className="showTodoList__cart-main">{UnFinishedTodoData}</div>
        </div>
      </div>
    </Spin>
  );
};

export default UnFinishedTodoList;
