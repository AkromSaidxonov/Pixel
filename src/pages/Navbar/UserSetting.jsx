import React, { useEffect, useState } from "react";
import logo from "../../assets/img/logo/pixel.png";
import { Dropdown,  Divider, Avatar,  Modal } from "antd";
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
} from "@ant-design/icons";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function UserSetting() {
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
      label: <span onClick={showModal}>Set img</span>,
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
      icon: < LeftSquareOutlined />,
    },
  ];
  return (
    <div className="navbar">
      <div className="navbar__user">
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
          <h2 className="navbar__userTitle" onClick={(e) => e.preventDefault()}>
            {data?.userName}
          </h2>
        </Dropdown>

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
