import React from "react";
import { Pagination } from "antd";

import { UseFinishedTodo } from "./UseFinishedTodo";

const FinishedTodoView = ({ data, setPag }) => {
  const { total, changePage, FinishedTodoData } = UseFinishedTodo(data, setPag);

  return (
    <div className="finishedTodo container">
      <div className="finishedTodo__main-section">{FinishedTodoData}</div>
      <div className="pagination">
        <Pagination
          onChange={changePage}
          responsive={true}
          defaultCurrent={1}
          total={total}
        />
      </div>
    </div>
  );
};

export default FinishedTodoView;
