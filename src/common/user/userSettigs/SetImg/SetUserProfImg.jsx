import React, { useState } from "react";
import { Modal, Spin } from "antd";
import { UseSetImg } from "./UseSetImg";

const SetUserProfImg = ({ isModalOpen, showModal }) => {
  const [img, setImg] = useState();
  const { handleSetImg, isLoading } = UseSetImg(img);

  return (
    <div>
      <Modal
        title="Set Acout img"
        open={isModalOpen}
        onOk={handleSetImg.bind(null, img)}
        onCancel={showModal}
      >
        <Spin spinning={isLoading} tip="Loading">
          <input type="file" onChange={(e) => setImg(e.target.files[0])} />
        </Spin>
      </Modal>
    </div>
  );
};

export default SetUserProfImg;
