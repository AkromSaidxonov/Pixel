import { useNavigate } from "react-router";

export const UserSetting = () => {
  const navigate = useNavigate();

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
  return handleLogOut;
};
