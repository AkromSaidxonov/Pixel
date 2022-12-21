import React, { useEffect, useState } from "react";
import { Menu, Drawer, Dropdown, Divider, Avatar, Modal } from "antd";
import { PicLeftOutlined } from "@ant-design/icons";
import logo from "../../assets/img/logo/pixel.png";
import {
  useGetUserQuery,
  useSetImgUserMutation,
  useDeleteImgMutation,
} from "../../redux/user/user";
import Cookies from "universal-cookie";
import swal from "sweetalert";
import {
  FileImageOutlined,
  DeleteOutlined,
  LeftSquareOutlined,
  SettingOutlined,
  HomeOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function DrawerComp() {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
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
        navigate("/");
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
    setOpen(false);
  };
  function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
  }
  const items = [
    getItem(<p>User setting</p>, "1", <SettingOutlined />, [
      {
        label: <p onClick={showModal}>Set img</p>,
        key: "1",
        icon: <FileImageOutlined />,
      },
      {
        key: "2",
        label: <p onClick={handleDeleteImg}>Delete img</p>,
        icon: <FileImageOutlined />,
      },
      {
        key: "3",
        label: <p onClick={handleDeleteUser}>Delete account</p>,
        icon: <DeleteOutlined />,
      },
      {
        key: "4",
        label: <p onClick={handleLogOut}>Log out</p>,
        icon: <LeftSquareOutlined />,
      },
    ]),
    {
      label: (
        <Link onClick={() => setOpen(false)} to="/">
          Home
        </Link>
      ),
      key: "5",
      icon: <HomeOutlined />,
    },
    getItem(<p>Services</p>, "6", <AppstoreOutlined />, [
      {
        label: (
          <Link onClick={() => setOpen(false)} to="/todo">
            Todo
          </Link>
        ),
        key: "7",
        icon: <FileImageOutlined />,
      },
    ]),
  ];

  return (
    <div className="drawer">
      <div className="drawer__icon" onClick={showDrawer}>
        <PicLeftOutlined />
      </div>
      <Drawer
        title={
          <div className="drawer__user">
            <h2>{data?.userName}</h2>

            <Avatar className="drawer__avatar">
              {data ? (
                data.attachamentContentId === null ? (
                  <h1 style={{ color: "white", textAlign: "center" }}>
                    {data && data.userName.slice(0, 1)}
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
        }
        closable={true}
        onClose={onClose}
        open={open}
      >
        <Menu
          // onClick={onClick}
          defaultOpenKeys={["key"]}
          // selectedKeys={[current]}
          mode="inline"
          items={items}
          className="drawer__menu"
        />
      </Drawer>
      <Modal
        title="Set Acout img"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <input type="file" onChange={(e) => setImg(e.target.files[0])} />
      </Modal>
    </div>
  );
}

export default DrawerComp;
