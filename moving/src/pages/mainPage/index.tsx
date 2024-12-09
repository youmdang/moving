import WeeksTrend from '@/components/mainPage/weeksTrend';
import GameMovie from '@/components/mainPage/gameMovie';
import BeforeOpening from '@/components/mainPage/ComingSoonMovies';
import PopularMovies from '@/components/mainPage/popularMovies';
import Series from '@/components/mainPage/series';
import Membership from '@/components/mainPage/membership';
import TodayContent from '@/components/mainPage/todaycontent';
import LogoGray from '@/images/LogoGray.svg';
import YoutubeIcon from '@/icons/youtubeIcon.svg';
import XIcon from '@/icons/x(sns)Icon.svg';
import TiktokIcon from '@/icons/tiktokIcon.svg';
import InstarIcon from '@/icons/instagramIcon.svg';
import MainBanner from '@/components/mainPage/MainBanner';
import { useModal } from '@/lib/hook/useModal';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import ModalFrame from '@/components/modal/ModalFrame';
import DetailModal from '@/components/detail/DetailModal';

export default function mainPage() {
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
      <main>
        <ModalFrame
          isOpenModal={isOpenModal}
          isOpacity={isOpacity}
          handleModalClose={handleModalClose}
        >
          {isOpenModal && <DetailModal isOpacity={isOpacity} />}
        </ModalFrame>

        <MainBanner handleModalOpen={handleModalOpen} />

        <WeeksTrend handleModalOpen={handleModalOpen} />

        <GameMovie handleModalOpen={handleModalOpen} />

        <BeforeOpening handleModalOpen={handleModalOpen} />

        <Series handleModalOpen={handleModalOpen} />

        <PopularMovies handleModalOpen={handleModalOpen} />

        <Membership />

        <TodayContent />
      </main>

      <footer className="mt-[108px] opacity-60">
        <hr className="border-[#1E1E1E]" />
        <div className="mx-[160px] my-5 flex gap-4 text-base text-[#dfdfdf]  ">
          <span>회사 소개</span>
          <span>서비스 소개</span>
          <span>이용약관</span>
          <span>개인정보 처리방침</span>
          <span>고객센터</span>
          <span>이벤트</span>
        </div>
        <hr className="border-[#1E1E1E]" />
        <div className="mx-[160px] mt-10">
          <div className="mb-[30px] flex justify-between">
            <LogoGray />
            <div className="flex gap-4">
              <YoutubeIcon />
              <InstarIcon />
              <TiktokIcon />
              <XIcon />
            </div>
          </div>

          <div className="mb-[60px] text-[#3e4248]">
            <p>
              무빙 주식회사대표이사 이태현고객센터 1599-3709 (평일 09:00~18:00 /
              점심시간 12:00~13:00 / 주말 및 공휴일 휴무)
            </p>
            <p>
              인천광역시 미추홀구 용현 5동 전자우편주소 : mangoj425@gmail.com
            </p>
            <p>Copyright© 컨텐츠무빙(주) All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
