import React, { useEffect, useState } from "react";
import { useGetUserQuery } from "../../redux/user/user";
import { useSelector } from "react-redux";
// import { setloading } from "../../redux/auth/authSlice";

const GetUserHook = () => {
  const token = localStorage.getItem("token");
  const [newData, setNewData] = useState();
  const { data } = useGetUserQuery();
  useEffect(() => {
    if (token) {
      setNewData(data);
    }
  }, [token]);
  return newData;
};

export default GetUserHook;
