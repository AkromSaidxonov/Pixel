import React from "react";
import { Collapse } from "antd";
import {
  FileImageOutlined,
  DeleteOutlined,
  LeftSquareOutlined,
} from "@ant-design/icons";
import { useGetUserQuery } from "../../store/users/users";
import UseUserSettings from "./UseUserSettings";
import SetUserProfImg from "./SetImg/SetUserProfImg";
import { UseSetImg } from "./SetImg/UseSetImg";

const UserSettings = () => {
  const { Panel } = Collapse;

  const { data } = useGetUserQuery();
  const { handleLogOut, handleDeleteImg, handleDeleteUser } = UseUserSettings();
  const { showModal, isModalOpen, closeModal } = UseSetImg();

  const checkImg =
    data?.attachamentContentId === null ? (
      <div onClick={showModal}>
        <FileImageOutlined />
        <span>Set img</span>
      </div>
    ) : (
      <div onClick={handleDeleteImg}>
        <FileImageOutlined />
        <span>Delete img</span>
      </div>
    );
  return (
    <div className="userSettings">
      <SetUserProfImg isModalOpen={isModalOpen} showModal={closeModal} />
      <Collapse destroyInactivePanel>
        <Panel header="Profile" key={1}>
          <div className="userSettings__items">
            {checkImg}
            <div onClick={handleDeleteUser}>
              <DeleteOutlined />
              <span>Delete account</span>
            </div>
            <div onClick={handleLogOut}>
              <LeftSquareOutlined />
              <span>Log out</span>
            </div>
          </div>
        </Panel>
      </Collapse>
    </div>
  );
};

export default UserSettings;
