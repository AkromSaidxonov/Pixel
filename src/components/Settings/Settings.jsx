import React, { useState } from "react";
import { Drawer, Menu, Modal } from "antd";
import {
  FileImageOutlined,
  DeleteOutlined,
  LeftSquareOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import {
  useSetImgUserMutation,
  useDeleteImgMutation,
} from "../../redux/user/user";

import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Settings = ({ name, imgUser }) => {
  const [open, setOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [img, setImg] = useState();
  const formData = new FormData();
  formData.append("file", img);
  const [setImgUser, { isSuccess }] = useSetImgUserMutation();
  const [deleteImg, { isError }] = useDeleteImgMutation();
  const navigate = useNavigate();

  const handleLogOut = () => {
    swal({
      title: "Are you sure?",
      text: " You will log out",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
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
    data.token;
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

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const checkImg = () => {
    imgUser ? (
      <div onClick={handleDeleteImg}>
        <FileImageOutlined />
        <span>Delete img</span>
      </div>
    ) : (
      ""
    );
  };
  return (
    <div className="setting">
      <SettingOutlined onClick={showDrawer} className="setting__icon" />
      <Drawer
        title={<h3 className="setting__title">{name}</h3>}
        placement="right"
        onClose={onClose}
        open={open}
      >
        <div className="setting__items">
          <div onClick={showModal}>
            <FileImageOutlined />
            <span>Set img</span>
          </div>

          <div onClick={handleDeleteUser}>
            <DeleteOutlined />
            <span>Delete account</span>
          </div>
          <div onClick={handleLogOut}>
            <LeftSquareOutlined />
            <span>Log out</span>
          </div>
        </div>
        <Modal
          title="Set Acout img"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <input type="file" onChange={(e) => setImg(e.target.files[0])} />
        </Modal>
      </Drawer>
    </div>
  );
};

export default Settings;
