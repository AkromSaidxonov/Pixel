import { toast } from "react-toastify";
import { useLoginMutation } from "../../../common/store/auth/authApi";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../../common/store/auth/authSlice";

export const UseLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [fetch, { data, isLoading, isSuccess, error }] = useLoginMutation();

  if (error) {
    toast.error(error?.data?.responseText);
  } else if (isSuccess === true) {
    dispatch(setCredentials(data?.token));
    data && window.localStorage.setItem("token", data?.token);
    navigate("/");
  }

  const handleLogin = async (valeu) => {
    const userData = {
      userName: valeu.email,
      password: valeu.password,
    };
    localStorage.setItem("userEmail", valeu.email);
    await fetch(userData).unwrap();
  };

  return { isLoading, handleLogin };
};
