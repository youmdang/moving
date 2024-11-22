import { useModal } from '@/lib/hook/useModal';
import { ReactNode, useState } from 'react';

interface ModalFrameProps {
  children: ReactNode;
  isOpenModal: boolean;
  isOpacity: boolean;
  handleModalClose: () => void;
}

export default function ModalFrame({
  children,
  isOpenModal,
  isOpacity,
  handleModalClose,
}: ModalFrameProps) {
  return (
    <div
      className={`fixed left-0 top-0 z-[100] h-screen w-full items-center justify-center`}
      style={{ display: isOpenModal ? 'flex' : 'none' }}
    >
      <div
        className={`absolute left-0 top-0 h-full w-full bg-[rgba(0,0,0,0.7)] ${isOpacity ? 'animate-modalFadeIn' : 'animate-modalFadeOut'}`}
        onClick={handleModalClose}
      />
      <div
        className={`h-[95vh] max-h-[1200px] w-full max-w-[1080px] overflow-y-auto opacity-0 ${isOpacity ? 'animate-modalFadeIn' : 'animate-modalFadeOut'}`}
      >
        {children}
      </div>
    </div>
  );
}
