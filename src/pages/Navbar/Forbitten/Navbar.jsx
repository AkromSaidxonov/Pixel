/** @format */

import React, { useEffect, useState } from "react";
import logo from "../../../assets/img/logo/pixel.png";
import { Link } from "react-router-dom";
import { Dropdown, Space, Divider } from "antd";
import Sidebar from "../../Sidebar/Sidebar";
import { DownOutlined } from "@ant-design/icons";
import UserSetting from "../../../common/user/userProfile/UserProfile";
import AlertNotification from "../../../common/Notification/AlertNotification";
import DealyNotif from "../../../common/Notification/DealyNotification/DealyNotif";

const Navbar = () => {
  const items = [
    {
      key: "1",
      label: <Link to="/todo">Todo</Link>,
    },
  ];

  const drawerRender = (menu) => (
    <div className="dropdown-content">
      {menu}
      <Divider
        style={{
          margin: 0,
          cursor: "pointer",
        }}
      />
    </div>
  );

  return (
    <div className="navbar">
      <AlertNotification />
      <div className="container ">
        <div className="navbar__items">
          <div className="navbar__logo">
            <img src={logo} alt="logo" />
            <Link to="/">Pixel</Link>
          </div>
          <div className="navbar__links">
            <Link to="/">Home</Link>
            <Dropdown
              menu={{
                items,
              }}
              dropdownRender={drawerRender}
            >
              <a>
                <Space>
                  Services
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          </div>
          <div className="navbar__lastItem">
            <div className="navbar__user">
              <UserSetting />
            </div>
            <DealyNotif />
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
