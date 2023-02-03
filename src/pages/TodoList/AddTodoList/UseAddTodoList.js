import { useAddTodoListMutation } from "../../../common/store/todoList/todoList";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

export const UseAddTodoList = (id, date) => {
  const [addTodoList, { isSuccess, isError }] = useAddTodoListMutation();
  const navigate = useNavigate();

  const handleAdd = async (valeu) => {
    const todoListData = {
      basicId: id,
      toDoLists: [
        {
          timeStart: valeu.start + ":00",
          timeFinish: valeu.end + ":00",
          comment: valeu.comment,
          finished: false,
        },
      ],
    };
    await addTodoList(todoListData);
    isError ? toast.error("Went error") : toast.error("Went error");
    isSuccess
      ? toast.error("Todo item added")
      : toast.success("Todo item added");
    navigate(-1);
  };

  return { handleAdd };
};
