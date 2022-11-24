/** @format */

import React, { useState } from "react";
import { Tabs } from "antd";
import { useParams } from "react-router";
import { Card } from "antd";
import {
  useGetTodoListQuery,
  useDeleteTodoListMutation,
  useFinshTodoListMutation,
} from "../../redux/todo/todoList";
import { useDeleteTodoMutation } from "../../redux/todo/todo";
import { CheckOutlined, DeleteOutlined, EditOutlined } from "@ant-design/icons";
import red from "../../assets/img/icon/circle.png";
import green from "../../assets/img/icon/circle (1).png";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const FinishedTodoListShov = () => {
  const { id, date } = useParams();
  const { data } = useGetTodoListQuery(id);
  const [deleteTodoList, { isSuccess }] = useDeleteTodoListMutation();
  const [deleteTodo, { isError }] = useDeleteTodoMutation();
  const [finishTodoList] = useFinshTodoListMutation();
  const navigate = useNavigate();

  const handleDelete = (idList) => {
    if (data.list.length === 1) {
      deleteTodo(id);
      isError === false ? toast.success("Todo deleted") : "";
      navigate("/todo");
    } else {
      deleteTodoList(idList);
      isSuccess === true ? toast.success("Todo item deleted") : "";
    }
    // if(data.list.length === )
  };
  const handleFinsh = (idTodoList) => {
    finishTodoList(idTodoList);
    toast.success("Todo item finished");
  };
  const hendleEdit = (id) => {
    navigate(`edit/${id}`);
  };

  return (
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
        <h1>{date.slice(0, 10) + " y"}</h1>
        <div className="showTodoList__cart-main">
          {data &&
            data.list.map((item) => (
              <Card
                hoverable
                title={<h4>{item.comment}</h4>}
                className="showTodoList__cart"
                key={item.id}
                extra={
                  <div>
                    <span className="showTodoList__status">
                      {item.finished === false ? (
                        <img src={red} alt="img" />
                      ) : (
                        <img src={green} alt="img" />
                      )}
                    </span>
                  </div>
                }
              >
                <div className="showTodoList__card-body">
                  <p>
                    Start time: <span>{item.timeStart}</span>
                    {}
                  </p>
                  <p>
                    Finsh time: <span>{item.timeFinish}</span>
                  </p>
                </div>
              </Card>
            ))}
        </div>
      </div>
    </div>
  );
};

export default FinishedTodoListShov;
