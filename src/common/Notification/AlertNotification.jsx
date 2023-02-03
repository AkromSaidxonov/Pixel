import React, { useEffect } from "react";
import { message } from "antd";

const AlertNotification = () => {
  const token = localStorage.getItem("token");
  const [messageApi, contextHolder] = message.useMessage();

  const getInfo = async () => {
    await fetch("https://pixel.up.railway.app/api/today", {
      headers: new Headers({
        Authorization: `Bearer ${token}`,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.toDoBasic) {
          messageApi.warning(`Today you have ${data?.toDoBasic?.length} todos`);
        } else {
          messageApi.warning("Today not added todo");
        }
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  useEffect(() => {
    getInfo();
  }, []);

  return <div>{contextHolder}</div>;
};

export default AlertNotification;
