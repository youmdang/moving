import { useState } from 'react';

export const useModal = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [isOpacity, setIsOpacity] = useState<boolean>(false);

  const handleModalOpen = () => {
    setIsOpenModal(true);
    setIsOpacity(true);
  };

  const handleModalClose = () => {
    setIsOpacity(false);

    setTimeout(() => {
      setIsOpenModal(false);
    }, 500);
  };

  return {
    isOpenModal,
    isOpacity,
    handleModalOpen,
    handleModalClose,
  };
};
