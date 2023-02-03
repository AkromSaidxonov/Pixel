import { useNavigate } from "react-router-dom";
import { useResetMutation } from "../../../common/store/auth/authApi";
import { toast } from "react-toastify";

export const UseResetPassword = () => {
  const navigate = useNavigate();
  const [reset, { isSuccess, isLoading, error }] = useResetMutation();

  if (error) {
    toast.error(error?.data?.responseText);
  } else if (isSuccess === true) {
    toast.info("Pleace verify your accautn");
    navigate(`/verify/${email}`);
  }

  const handleSendEmailCode = async (value) => {
    await reset(value.email);
  };
  return { isLoading, handleSendEmailCode };
};
