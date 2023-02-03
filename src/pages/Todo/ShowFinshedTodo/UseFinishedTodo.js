import { useNavigate } from "react-router";
import green from "../../../assets/img/icon/circle (1).png";
import red from "../../../assets/img/icon/circle.png";
import { EyeOutlined } from "@ant-design/icons";

import { Card } from "antd";

export const UseFinishedTodo = (data, setPag) => {
  console.log(data);
  const navigate = useNavigate();
  const total = parseInt(
    Math.ceil(data && data?.statistic?.finishedCount / 20) * 10
  );
  const handleView = (id, date) => {
    navigate(`showFinishedTodoList/${id}/${date}`);
  };
  const changePage = (e) => setPag(e - 1);
  const FinishedTodoData =
    data &&
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
    ));

  return { total, changePage, FinishedTodoData };
};
