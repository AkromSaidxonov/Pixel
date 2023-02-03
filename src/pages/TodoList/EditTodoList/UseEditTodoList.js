import { useEditTodoListMutation } from "../../../common/store/todoList/todoList";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

export const UseEditTodoList = (id, idList) => {
  const [editTodoList, { isSuccess, error }] = useEditTodoListMutation();
  const navigate = useNavigate();

  const handleAdd = async (valeu) => {
    const todoListData = {
      basicId: id,
      toDoLists: [
        {
          id: idList,
          timeStart: valeu.start + ":00",
          timeFinish: valeu.end + ":00",
          comment: valeu.comment,
          finished: false,
        },
      ],
    };
    await editTodoList(todoListData);
    isSuccess === true && toast.success("Todo item edited");
    error && toast.error(error.data.responseText);
    navigate(-1);
  };

  return { handleAdd };
};
