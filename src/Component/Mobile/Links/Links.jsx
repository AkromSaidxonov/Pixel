import React from "react";
import { Collapse } from "antd";
import { Link } from "react-router-dom";

const Links = ({ onClose }) => {
  const { Panel } = Collapse;

  return (
    <div className="mobileLinks">
      <Link onClick={onClose} to="/" className="mobileLinks__item">
        Home
      </Link>
      <Collapse destroyInactivePanel>
        <Panel header="Servise" key={1}>
          <Link onClick={onClose} to="/todo">
            Todo
          </Link>
        </Panel>
      </Collapse>
    </div>
  );
};

export default Links;
