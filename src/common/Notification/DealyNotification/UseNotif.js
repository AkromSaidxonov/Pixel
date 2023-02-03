import React, { useState } from "react";
import { useGetNotifQuery } from "../../store/Notification/notifApi";
import { Card, Space } from "antd";
import { useNavigate } from "react-router";

const UseNotif = () => {
  const [open, setOpen] = useState(false);
  const { data } = useGetNotifQuery();
  const navigate = useNavigate();
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const handleView = (id, date) => {
    navigate(`/todo/showTodoList/${id}/${date}`);
    setOpen(false);
  };
  const badgeNotif = data?.toDoBasic ? data?.toDoBasic?.length : "";

  const dealyTodo =
    data?.toDoBasic &&
    data?.toDoBasic?.map((item) => (
      <Card
        key={item.id}
        title={item.date.slice(0, 10)}
        extra={<a onClick={handleView.bind(null, item.id, item.date)}>View</a>}
        style={{
          width: 250,
        }}
      >
        <p className="notifCardText">
          <span>Status:</span> not finished
        </p>
      </Card>
    ));

  return { open, showDrawer, onClose, dealyTodo, badgeNotif };
};

export default UseNotif;
