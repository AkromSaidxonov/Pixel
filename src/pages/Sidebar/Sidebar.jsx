import React, { useState } from "react";
import { Drawer, Avatar } from "antd";
import UseDrawer from "./UseDrawer";
import { MenuOutlined } from "@ant-design/icons";
import { useGetUserQuery } from "../../common/store/users/users";
import UserSettings from "../../common/user/userSettigs/UserSettings";
import UserProfile from "../../common/user/userProfile/UserProfile";
import Links from "../../Component/Mobile/Links/Links";

const Sidebar = () => {
  const [open, showDrawer, onClose] = UseDrawer();
  const { data } = useGetUserQuery();

  return (
    <div className="sidebar">
      <MenuOutlined onClick={showDrawer} className="sidebar__icon" />

      <Drawer
        title={
          <div className="sidebar__userProf">
            <h3>{data?.userName}</h3> <UserProfile />
          </div>
        }
        placement="right"
        onClose={onClose}
        open={open}
      >
        <UserSettings />
        <div className="sidebar__mobileLink">
          <Links onClose={onClose} />
        </div>
      </Drawer>
    </div>
  );
};

export default Sidebar;
