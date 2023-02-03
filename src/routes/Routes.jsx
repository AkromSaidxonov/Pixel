import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

//
import Forbitten from "./Forbitten";
import UnForbitten from "./UnForbitten";
import Loader from "../common/Loader/Loader";

function Routes() {
  const navigate = useNavigate();
  let token = localStorage.getItem("token");
  const [loader, setLoader] = useState(false);

  // useEffect(() => {
  //   if (token !== null) {
  //     navigate("/");
  //   }
  //   setLoader(true);
  //   setTimeout(() => {
  //     setLoader(false);
  //   }, 3000);
  // }, [token]);

  const CheckRotes =
    token === null || token === "" ? (
      <UnForbitten />
    ) : loader === true ? (
      <Loader />
    ) : (
      <Forbitten />
    );

  return CheckRotes;
}

export default Routes;
