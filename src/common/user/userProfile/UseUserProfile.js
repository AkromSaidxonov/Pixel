import { useGetUserQuery } from "../../store/users/users";
import { isLoading } from "../../store/auth/authSlice";
import { useDispatch } from "react-redux";

export const UseUserProfile = () => {
  const { data } = useGetUserQuery();
  const dispatch = useDispatch();
};
