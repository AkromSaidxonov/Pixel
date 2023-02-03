/** @format */

import React, { useEffect, useState } from "react";
import logo from "../../assets/img/logo/pixel.png";
import { Link } from "react-router-dom";
import { Dropdown, Space, Divider } from "antd";
import DrawerComp from "./DrawerComp";
import { DownOutlined } from "@ant-design/icons";

import NavButton from "./NavButton";
import UserSetting from "./UserSetting";
import AlertNotification from "../../components/Notification/AlertNotification";

const Navbar = () => {
  const items = [
    {
      key: "1",
      label: <Link to="/todo">Todo</Link>,
    },
  ];


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
              dropdownRender={(menu) => (
                <div className="dropdown-content">
                  {menu}
                  <Divider
                    style={{
                      margin: 0,
                      cursor: "pointer",
                    }}
                  />
                </div>
              )}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  Services
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          </div>
          <NavButton />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
