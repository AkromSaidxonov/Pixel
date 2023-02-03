import React, { useState } from "react";

const UseDrawer = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return [open, showDrawer, onClose];
};

export default UseDrawer;
