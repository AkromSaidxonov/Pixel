import { toast } from "react-toastify";
import { useVerifyMutation } from "../../../common/store/auth/authApi";
import { useNavigate } from "react-router-dom";

export const UseVerify = (userEmail) => {
  const navigate = useNavigate();

  const [verify, { data, error, isLoading, isSuccess }] = useVerifyMutation();

  if (error) {
    toast.error(error?.data?.responseText);
  } else if (isSuccess === true) {
    dispatch(setCredentials(data?.token));
    data && window.localStorage.setItem("token", data?.token);
    navigate("/");
  }

  const handleCheckValueCode = () => ({
    validator(_, value) {
      if (value.length === 6) {
        return Promise.resolve();
      }
      return Promise.reject(new Error("The must be consist of 6 numbers!"));
    },
  });

  const handleVerify = (valeu) => {
    verify({ emailCode: valeu.code, email: userEmail });
  };
  return { isLoading, handleVerify, handleCheckValueCode };
};
