import DetailModal from '@/components/detail/DetailModal';
import ModalFrame from '@/components/modal/ModalFrame';
import { useModal } from '@/lib/hook/useModal';

export default function ModalPage() {
  const { isOpenModal, isOpacity, handleModalOpen, handleModalClose } =
    useModal();
  return (
    <>
      <button type="button" className="relative z-50" onClick={handleModalOpen}>
        모달 열기
      </button>
      <ModalFrame
        isOpenModal={isOpenModal}
        isOpacity={isOpacity}
        handleModalClose={handleModalClose}
      >
        <DetailModal isOpacity={isOpacity} />
      </ModalFrame>
    </>
  );
}
