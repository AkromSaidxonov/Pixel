import { useState } from "react";
import { useSetImgUserMutation } from "../../../store/users/users";
import { toast } from "react-toastify";
export const UseSetImg = (img) => {
  const [setImgUser, { isSuccess, error, isLoading }] = useSetImgUserMutation();
  const [isModalOpen, setIsModalOpen] = useState();
  console.log(isModalOpen);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleSetImg = async () => {
    const formData = new FormData();
    formData.append("file", img);
    await setImgUser(formData);
    closeModal();
    !error ? toast.success("Success") : toast.success("Went error");
  };
  return {
    handleSetImg,
    isModalOpen,
    showModal,
    isLoading,
    isSuccess,
    closeModal,
  };
};
