import { useNavigate } from "react-router";
import { Tabs } from "antd";
import { Card } from "antd";
import {
  useGetTodoListQuery,
  useDeleteTodoListMutation,
  useFinshTodoListMutation,
} from "../../../common/store/todoList/todoList";
import { useDeleteTodoMutation } from "../../../common/store/todo/todoApi";
import { CheckOutlined, DeleteOutlined, EditOutlined } from "@ant-design/icons";
import red from "../../../assets/img/icon/circle.png";
import green from "../../../assets/img/icon/circle (1).png";
import { toast } from "react-toastify";

export const UseUnFinishedTodoLIst = (id, date) => {
  const { data, isLoading } = useGetTodoListQuery(id);
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
      isSuccess ? toast.success("Todo item deleted") : "";
    }
  };

  const handleFinsh = (idTodoList) => {
    finishTodoList(idTodoList);
    toast.success("Todo item finished");
  };

  const hendleEdit = (id) => {
    navigate(`edit/${id}`);
  };
  const addTodoList = () => {
    navigate(`/todo/todoList/${id}/${date}`);
  };
  const UnFinishedTodoData =
    data &&
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
        actions={[
          <CheckOutlined
            key="finshed"
            onClick={handleFinsh.bind(null, item.id)}
          />,
          <EditOutlined onClick={hendleEdit.bind(null, item.id)} key="edit" />,
          <DeleteOutlined
            key="delete"
            onClick={handleDelete.bind(null, item.id)}
          />,
        ]}
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
    ));

  return { isLoading, UnFinishedTodoData, addTodoList };
};
