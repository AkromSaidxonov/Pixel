import React, { useEffect, useState } from "react";
import { Avatar } from "antd";
import { useGetUserQuery } from "../../redux/user/user";
import Settings from "../../components/Settings/Settings";

function UserSetting() {
  // const { data } = useGetUserQuery();
  // const [usData, steUsData] = useState()
  const { data } = useGetUserQuery();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
    }
  }, [token]);

  return (
    <div className="navbar">
      <div className="navbar__user">
        <Settings name={data?.userName} imgUser={data?.attachamentContentId} />
        <Avatar className="avatar">
          {data ? (
            data.attachamentContentId === null ? (
              <h1 style={{ color: "white", textAlign: "center" }}>
                {data && data?.userName.slice(0, 1)}
              </h1>
            ) : (
              <img
                alt="user"
                src={`https://pixel.up.railway.app/api/attachment/get/${data.attachamentContentId}`}
              />
            )
          ) : (
            ""
          )}
        </Avatar>
      </div>
    </div>
  );
}

export default UserSetting;
