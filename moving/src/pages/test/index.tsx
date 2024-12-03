import DetailModal from '@/components/detail/DetailModal';
import ModalFrame from '@/components/modal/ModalFrame';
import { useModal } from '@/lib/hook/useModal';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function ModalPage() {
  const { isOpenModal, isOpacity, handleModalOpen, handleModalClose } =
    useModal();
  const router = useRouter();

  useEffect(() => {
    if (router.query.movieNumber) {
      const movieNumber = Number(router.query.movieNumber);
      handleModalOpen(movieNumber);
    }
  }, []);
  return (
    <>
      <button
        type="button"
        className="relative z-50"
        onClick={() => {
          handleModalOpen(1159311);
        }}
      >
        모달 열기
      </button>
      <ModalFrame
        isOpenModal={isOpenModal}
        isOpacity={isOpacity}
        handleModalClose={handleModalClose}
      >
        {isOpenModal && <DetailModal isOpacity={isOpacity} />}
      </ModalFrame>
    </>
  );
}
