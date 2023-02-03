import React, { useState } from "react";
import { useGetTodoFinishedQuery } from "../../../common/store/todo/todoApi";

export const UseTodoTabs = () => {
  const [pag, setPag] = useState(0);
  const { data,isLoading } = useGetTodoFinishedQuery(pag);
  const disabledTabs = data && data?.responseText === "Empty" ? true : false;

  return { setPag, data, isLoading, disabledTabs };
};
