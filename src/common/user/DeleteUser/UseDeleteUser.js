import { useConfirmDeleteUserMutation } from "../../store/users/users";
import { useNavigate } from "react-router";
import swal from "sweetalert";
import { toast } from "react-toastify";

export const UseDeleteUser = () => {
  const [confirmDeleteUser, { isSuccess, isLoading, error }] =
    useConfirmDeleteUserMutation();
  const navigate = useNavigate();

  if (error) {
    toast.error(error?.data?.responseText);
  } else if (isSuccess === true) {
    dispatch(setCredentials(data?.token));
    data && window.localStorage.removeItem("token");
    data && window.localStorage.removeItem("userEmail");
    navigate("/");
  }

  const handleDeleteUser = (valeu) => {
    const DeleteDate = {
      password: valeu.password,
      code: valeu.code,
    };

    swal({
      title: "Are you sure?",
      text: " Delete your account",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        confirmDeleteUser(DeleteDate);
      }
    });
  };
  return { isLoading, handleDeleteUser };
};
