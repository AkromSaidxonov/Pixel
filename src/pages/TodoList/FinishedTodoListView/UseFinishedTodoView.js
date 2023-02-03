import React from "react";
import { Card } from "antd";
import { useGetTodoListQuery } from "../../../common/store/todoList/todoList";
import red from "../../../assets/img/icon/circle.png";
import green from "../../../assets/img/icon/circle (1).png";

export const UseFinishedTodoView = (id) => {
  const { data, isLoading } = useGetTodoListQuery(id);

  const FinishedTodoData =
    data &&
    data.list.map((item) => (
      <Card
        hoverable
        title={<h4>{item.comment}</h4>}
        className="showFinishedTodoList__cart"
        key={item.id}
        extra={
          <div>
            <span className="showFinishedTodoList__status">
              {item.finished === false ? (
                <img src={red} alt="img" />
              ) : (
                <img src={green} alt="img" />
              )}
            </span>
          </div>
        }
      >
        <div className="showFinishedTodoList__card-body">
          <p>
            Start time: <span>{item.timeStart}</span>
            {}
          </p>
          <p>
            Finsh time: <span>{item.timeFinish}</span>
          </p>
        </div>
      </Card>
    ));

  return { FinishedTodoData, isLoading };
};
