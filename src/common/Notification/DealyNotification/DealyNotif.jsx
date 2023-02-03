import React from "react";
import { Drawer, Badge, Space } from "antd";
import { BellOutlined } from "@ant-design/icons";
import UseNotif from "./UseNotif";

function DealyNotif() {
  const { open, showDrawer, onClose, dealyTodo, badgeNotif } = UseNotif();

  return (
    <div className="dealyNotif">
      <Badge count={badgeNotif}>
        <BellOutlined onClick={showDrawer} className="sidebar__icon" />
      </Badge>
      <Drawer
        width={300}
        title={
          <div className="sidebar__userProf">
            <h3>Dealy notification</h3>
          </div>
        }
        placement="right"
        onClose={onClose}
        open={open}
      >
        <Space direction="vertical" size={16}>
          {dealyTodo}
        </Space>
      </Drawer>
    </div>
  );
}

export default DealyNotif;
