/** @format */

import React from "react";
import { Tabs, Spin } from "antd";
import { UseFinishedTodoView } from "./UseFinishedTodoView";
import { useParams } from "react-router";

const FinishedTodoListShov = () => {
  const { id, date } = useParams();
  const { FinishedTodoData, isLoading } = UseFinishedTodoView(id);

  return (
    <Spin tip="Loading" spinning={isLoading}>
      <div className="container showFinishedTodoList">
        <div className="showFinishedTodoList__link">
          <Tabs
            defaultActiveKey="1"
            items={[
              {
                label: "Todo item list",
                key: "1",
              },
            ]}
          />
          <h1>{date.slice(0, 10) + " y"}</h1>
          <div className="showFinishedTodoList__cart-main">
            {FinishedTodoData}
          </div>
        </div>
      </div>
    </Spin>
  );
};

export default FinishedTodoListShov;
