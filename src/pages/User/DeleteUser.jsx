import React, { useEffect, useState } from "react";
import {
  useDeleteUserMutation,
  useConfirmDeleteUserMutation,
} from "../../redux/user/user";
import { Input, Button } from "antd";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import Cookies from "universal-cookie";

function DeleteUser() {
  const [deleteUser, { isError }] = useDeleteUserMutation();
  const [confirmDeleteUser, { isSuccess, isLoading }] =
    useConfirmDeleteUserMutation();
  const [password, setPassword] = useState();
  const [code, setCode] = useState();
  const email = localStorage.getItem("userEmail");
  const navigate = useNavigate();
  const cookies = new Cookies();

  const DeleteDate = {
    email: email,
    password: password,
    code: code,
  };

  useEffect(() => {
    deleteUser(email);
    isError === true ? navigate("/") && toast.error("Went error") : "";
  }, []);

  const handleDeleteUser = (e) => {
    swal({
      title: "Are you sure?",
      text: " Delete img",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        e.preventDefault();
        confirmDeleteUser(DeleteDate);
        cookies.remove("token");
        localStorage.removeItem("token");
        location.reload();
      }
    });
  };
  return (
    <div className="deleteUser">
      <div className="deleteUser__item">
        <p>
          Code sent <span>{email}</span>{" "}
        </p>
        <form onSubmit={handleDeleteUser} className="deleteUser__form">
          <Input
            className="deleteUser__input"
            required
            placeholder="Enter password"
            type="number"
            size="large"
            name="email"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            className="deleteUser__input"
            required
            placeholder="Enter code"
            type="number"
            size="large"
            name="email"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />

          <div className="deleteUser__button">
            {isLoading !== true ? (
              <button type="submit">Sent</button>
            ) : (
              <Button loading type="submit">
                Sent
              </Button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default DeleteUser;
