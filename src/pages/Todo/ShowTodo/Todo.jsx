/** @format */

import React from "react";
import { Pagination } from "antd";
import { UseTodo } from "./UseTodo";

const Todo = () => {
  const { total, handleAddTodo, todoData, changePage } = UseTodo();

  return (
    <div className="todo">
      <h4 onClick={handleAddTodo}>Add todo</h4>
      <div className="todo__main-sec">{todoData}</div>

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

export default Todo;
