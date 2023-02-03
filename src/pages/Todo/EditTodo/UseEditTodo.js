import { useEditTodoMutation } from "../../../common/store/todo/todoApi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

export const UseEditTodo = (id) => {
  const [editTodo, { data, error }] = useEditTodoMutation();
  const navigate = useNavigate();

  const handleEdit = async (value) => {
    const todoListData = {
      id: id,
      date: value.date,
    };
    await editTodo(todoListData);
    data && toast.success("Todo edited");
    error && toast.error(error.data.responseText);
    navigate("/todo");
  };
  return { handleEdit };
};
