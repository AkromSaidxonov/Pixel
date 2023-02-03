import { useState } from "react";
import { useRegistrMutation } from "../../../common/store/auth/authApi";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

export const UseSignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [registr, { isLoading, error, isSuccess }] = useRegistrMutation();

  if (error) {
    toast.error(error?.data?.responseText);
  } else if (isSuccess === true) {
    toast.info("Pleace verify your accautn");
    navigate(`/verify/${email}`);
  }
  const handleCheckValueConfirm = ({ getFieldValue }) => ({
    validator(_, value) {
      if (!value || getFieldValue("password") === value) {
        return Promise.resolve();
      }
      return Promise.reject(
        new Error("The two passwords that you entered do not match!")
      );
    },
  });

  const handleSignUp = async (value) => {
    const userData = {
      fullName: value.name,
      email: value.email,
      password: value.password,
      prePassword: value.confirmPassword,
    };
    setEmail(value.email);
    await registr(userData);
  };
  return { handleSignUp, isLoading, handleCheckValueConfirm };
};
