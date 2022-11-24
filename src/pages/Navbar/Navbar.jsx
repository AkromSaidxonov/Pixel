/** @format */

import React, { useEffect, useState } from "react";
import logo from "../../assets/img/logo/pixel.png";
import { Link } from "react-router-dom";
import { Dropdown, Space, Divider, Avatar, Menu, Modal } from "antd";
import {
  useGetUserQuery,
  useSetImgUserMutation,
  useDeleteImgMutation,
} from "../../redux/user/user";
import Cookies from "universal-cookie";
import swal from "sweetalert";
import {
  DownOutlined,
  FileImageOutlined,
  DeleteOutlined,
  LeftSquareOutlined,
} from "@ant-design/icons";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const cookies = new Cookies();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [img, setImg] = useState();
  const formData = new FormData();
  formData.append("file", img);
  const { data } = useGetUserQuery();
  const [setImgUser, { isSuccess }] = useSetImgUserMutation();
  const [deleteImg, { isError }] = useDeleteImgMutation();
  const navigate = useNavigate();

  useEffect(() => {}, [data]);

  const handleLogOut = () => {
    swal({
      title: "Are you sure?",
      text: " You will log out",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        cookies.remove("token");
        localStorage.removeItem("token");
        location.reload();
      }
    });
  };
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = async () => {
    await setImgUser(formData);
    isSuccess === true
      ? toast.success("Success")
      : toast.error("You can set img only once");
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleDeleteImg = () => {
    swal({
      title: "Are you sure?",
      text: " Delete img",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        deleteImg(data.attachamentContentId);
        isError === false
          ? toast.success("Img deleted")
          : toast.error("went error");
      }
    });
  };
  const handleDeleteUser = () => {
    navigate("/deleteAcaunt");
  };

  const items = [
    {
      key: "1",
      label: <Link to="/todo">Todo</Link>,
    },
  ];

  return (
    <div className="navbar">
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
          <div className="navbar__user">
            <Menu
              mode="horizontal"
              triggerSubMenuAction="click"
              className="navbar__menu"
            >
              <Menu.SubMenu key="SubMenu" title={data && data.userName}>
                <Menu.Item
                  key="three"
                  onClick={showModal}
                  icon={<FileImageOutlined />}
                >
                  <span>Set img</span>
                </Menu.Item>
                <Menu.Item
                  key="three"
                  onClick={handleDeleteImg}
                  icon={<FileImageOutlined />}
                >
                  <span>Delete img</span>
                </Menu.Item>
                <Menu.Item
                  key="four"
                  onClick={handleDeleteUser}
                  icon={<DeleteOutlined />}
                >
                  <span>Delete account</span>
                </Menu.Item>
                <Menu.Item
                  onClick={handleLogOut}
                  key="five"
                  icon={<LeftSquareOutlined />}
                >
                  <span>Log out</span>
                </Menu.Item>
              </Menu.SubMenu>
            </Menu>
            <Modal
              title="Set Acout img"
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <input type="file" onChange={(e) => setImg(e.target.files[0])} />
            </Modal>

            <Avatar className="avatar">
              {data ? (
                data.attachamentContentId === null ? (
                  <h1 style={{ color: "white", textAlign: "center" }}>
                    {data && data.userName.slice(0, 1)}
                  </h1>
                ) : (
                  <img
                    alt="user"
                    src={`https://pixel-inc.herokuapp.com/api/attachment/get/${data.attachamentContentId}`}
                  />
                )
              ) : (
                ""
              )}
            </Avatar>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
