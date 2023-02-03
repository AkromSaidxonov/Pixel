import React from "react";
import { Spin } from "antd";

function Loader() {
  return <Spin tip="Loading" spinning={true} className="loader"></Spin>;
}

export default Loader;
