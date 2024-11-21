import Image from 'next/image';
import LeftArrow from '@/icons/left-arrow-Icon.svg';
import RightArrow from '@/icons/right-arrow-Icon.svg';
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

const posterData = [
  {
    id: 1,
    src: '/images/mainpage-width-image.png',
    title: 'The Green Mile',
    year: '2016',
    rating: '9.2',
    genre: 'Biographical',
  },
  {
    id: 2,
    src: '/images/mainpage-width-image.png',
    title: 'The Green Mile',
    year: '2016',
    rating: '9.2',
    genre: 'Biographical',
  },
  {
    id: 3,
    src: '/images/mainpage-width-image.png',
    title: 'The Green Mile',
    year: '2016',
    rating: '9.2',
    genre: 'Biographical',
  },
  {
    id: 4,
    src: '/images/mainpage-width-image.png',
    title: 'The Green Mile',
    year: '2016',
    rating: '9.2',
    genre: 'Biographical',
  },
];

export default function mainPage() {
  return (
    <>
      <main>
        <section className="">
          <div className="relative h-auto w-full">
            <div
              className="absolute inset-0 
            bg-gradient-to-t from-[#131518] to-[rgba(59,63,69,0)]"
            />

            <Image
              src={'/images/mainBanner.png'}
              layout="responsive" // 반응형 크기 조정
              width={1920} // 원본 이미지 너비
              height={708} // 원본 이미지 높이
              alt="메인 베너"
            />
            <div className="absolute bottom-0 mx-[8.5vw] text-center text-white">
              <h1 className="flex flex-col gap-2 text-start text-white ">
                <span className="ml-1 text-base">피터손 · 브렌다 슈에이</span>
                <span className="text-6xl font-semibold">엘리멘탈</span>
              </h1>
              <ul className="relative flex gap-14">
                <div className="absolute left-[-25px] top-[50%] flex h-[50px] w-[50px] -translate-y-1/2 transform items-center justify-center rounded-full bg-white">
                  <LeftArrow />
                </div>
                {posterData.map((poster) => (
                  <li className="h-auto max-w-[358px]">
                    <Image
                      key={poster.id}
                      src={poster.src}
                      width={358}
                      height={190}
                      alt="가로 이미지"
                    />
                  </li>
                ))}

                <div className="absolute right-[-25px] top-[50%] flex h-[50px] w-[50px] -translate-y-1/2 transform items-center justify-center rounded-full bg-white">
                  <RightArrow />
                </div>
              </ul>
            </div>
          </div>
        </section>
        <WeeksTrend />

        <GameMovie />

        <BeforeOpening />

        <Series />

        <PopularMovies />

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
              인천광역시 미추홀구 용현 5동 전자우편주소 : mangoj425@Gmail.c om
            </p>
            <p>Copyright© 컨텐츠무빙(주) All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
