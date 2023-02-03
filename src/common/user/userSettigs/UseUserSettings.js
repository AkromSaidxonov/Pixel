import {
  useDeleteImgMutation,
  useDeleteUserMutation,
} from "../../store/users/users";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { useGetUserQuery } from "../../store/users/users";

const UseUserSettings = () => {
  const [deleteImg, { isError, isSuccess }] = useDeleteImgMutation();
  const navigate = useNavigate();
  const [deleteUser, { error }] = useDeleteUserMutation();
  const { data } = useGetUserQuery();
  const email = localStorage.getItem("userEmail");

  const handleLogOut = () => {
    swal({
      title: "Are you sure?",
      text: " You will log out",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        localStorage.removeItem("token");
        navigate("/");
        location.reload();
      }
    });
  };
  const deleteProfImg = async () => {
    await deleteImg(data?.attachamentContentId);
    if (error) {
      toast.error(error?.data?.responseText);
    } else if (isError === true) {
      toast.error("went error");
    } else if (isSuccess === true) {
      toast.success("Img deleted");
    }
  };

  const handleDeleteImg = () => {
    swal({
      title: "Are you sure?",
      text: " Delete img",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        deleteProfImg();
      }
    });
  };
  const handleDeleteUser = () => {
    deleteUser(email);
    navigate("/deleteAcaunt");
  };

  return {
    handleLogOut,
    handleDeleteImg,
    handleDeleteUser,
  };
};

export default UseUserSettings;
