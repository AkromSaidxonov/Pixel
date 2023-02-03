import React from "react";
import { Avatar } from "antd";
//
// import Settings from "../../../components/Settings/Settings";
import { useGetUserQuery } from "../../store/users/users";

function UserProfile() {
  const { data } = useGetUserQuery();

  const userProfileImg = data ? (
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
  );
  return (
    <div>
      <div className="userProfile ">
        <Avatar className="avatar">{userProfileImg}</Avatar>
      </div>
    </div>
  );
}

export default UserProfile;
