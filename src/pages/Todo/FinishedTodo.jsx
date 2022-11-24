/** @format */

import React from "react";
import { Card, Pagination } from "antd";
import green from "../../assets/img/icon/circle (1).png";
import red from "../../assets/img/icon/circle.png";
import { EyeOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router";

const FinishedTodo = ({ data, setPag }) => {
  const navigate = useNavigate();
  const total = parseInt(
    Math.ceil(data && data.statistic.finishedCount / 20) * 10
  );
  const handleView = (id, date) => {
    navigate(`showFinishedTodoList/${id}/${date}`);
  };
  return (
    <div className="finishedTodo container">
      <div className="finishedTodo__main-section">
        {data &&
          data.list.map((item) => (
            <div className="finishedTodo__item">
              <Card hoverable className="finishedTodo__cart">
                <div className="finishedTodo__cart-header">
                  <p>{item.date.slice(0, 10) + " y"}</p>
                  <div className="finishedTodo__header">
                    <span className="finishedTodo__view">
                      <EyeOutlined
                        onClick={handleView.bind(null, item.id, item.date)}
                      />
                    </span>
                    <span className="finishedTodo__status">
                      {item.finished === false ? (
                        <img src={red} alt="img" />
                      ) : (
                        <img src={green} alt="img" />
                      )}
                    </span>
                  </div>
                </div>
              </Card>
            </div>
          ))}
      </div>
      <div className="pagination">
        <Pagination
          onChange={(e) => setPag(e - 1)}
          responsive={true}
          defaultCurrent={1}
          total={total}
        />
      </div>
    </div>
  );
};

export default FinishedTodo;
