import React, { useEffect } from "react";
import { message } from "antd";

const AlertNotification = () => {
  const token = localStorage.getItem("token");
  const [messageApi, contextHolder] = message.useMessage();


  const getInfo = async () => {
    await fetch("https://pixel.up.railway.app/today", {
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
  const info = () => {
    if (data?.toDoBasic === undefined) {
      messageApi.warning("Today not added todo");
    } else {
      messageApi.warning(massage);
    }
  };

  useEffect(() => {
    // alertMsg();
    getInfo();

    // if (data?.toDoBasic === undefined) {
    //   messageApi.warning("Today not added todo");
    // } else {
    //   messageApi.warning(massage);
    // }
  }, []);

  return <div>{contextHolder}</div>;
};

export default AlertNotification;
