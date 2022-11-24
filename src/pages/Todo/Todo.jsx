/** @format */

import React, { useState } from "react";
import {
  useGetTodoQuery,
  useFinshTodoMutation,
  useDeleteTodoMutation,
} from "../../redux/todo/todo";
import { Card, Pagination } from "antd";
import red from "../../assets/img/icon/circle.png";
import green from "../../assets/img/icon/circle (1).png";
import {
  CheckOutlined,
  DeleteOutlined,
  EditOutlined,
  EyeOutlined,
  FileAddOutlined,
} from "@ant-design/icons";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const Todo = () => {
  const [pag, setPag] = useState(0);
  const { data } = useGetTodoQuery(pag);
  const total =
    data === undefined
      ? parseInt(Math.ceil(data && data.statistic.notFinishedCount / 20) * 10)
      : 10;

  const navigate = useNavigate();
  const [finishTodo, { isSuccess }] = useFinshTodoMutation();
  const [deleteTodo, { isError }] = useDeleteTodoMutation();

  const addTodoList = (id, date) => {
    navigate(`todoList/${id}/${date}`);
  };
  const handleView = (id, date) => {
    navigate(`showTodoList/${id}/${date}`);
  };
  const handleEdit = (id, date) => {
    navigate(`editTodo/${id}/${date}`);
  };
  const handleFinsh = async (id) => {
    await finishTodo(id);
    isSuccess && toast.success("Todo finished");
  };
  const handleDlete = async (id) => {
    await deleteTodo(id);
    isError === false ? toast.error("Todo deleted") : "";
  };
  const handleAddTodo = () => {
    navigate("addTodo");
  };

  return (
    <div className="todo">
      <h4 onClick={handleAddTodo}>Add todo</h4>
      <div className="todo__main-sec">
        {data && data.list === undefined ? (
          <h1>Todo not created</h1>
        ) : (
          data &&
          data.list.map((item) => (
            <div key={item.id} className="todo__item">
              <div className="todo__carts">
                <Card
                  title={item.date.slice(0, 10) + " y"}
                  extra={
                    <div className="todo__cart-header">
                      <span className="todo__view">
                        <EyeOutlined
                          onClick={handleView.bind(null, item.id, item.date)}
                        />
                      </span>
                      <span className="todo__status">
                        {data && data.list.finished !== false ? (
                          <img src={red} alt="img" />
                        ) : (
                          <img src={green} alt="img" />
                        )}
                      </span>
                    </div>
                  }
                  hoverable
                  className="todo__cart"
                >
                  <div className="todo__cart-detail">
                    <div>
                      <FileAddOutlined
                        onClick={addTodoList.bind(null, item.id, item.date)}
                      />
                    </div>
                    <div>
                      <EditOutlined
                        onClick={handleEdit.bind(null, item.id, item.date)}
                      />
                    </div>
                    <div>
                      <CheckOutlined
                        onClick={handleFinsh.bind(null, item.id)}
                      />
                    </div>
                    <div>
                      <DeleteOutlined
                        onClick={handleDlete.bind(null, item.id)}
                      />
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="pagination">
        <Pagination
          onChange={(e) => setPag(e - 1)}
          responsive={true}
          defaultCurrent={1}
          total={data === undefined ? 10 : total}
        />
      </div>
    </div>
  );
};

export default Todo;
