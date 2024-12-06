import Image from 'next/image';
import RightArrow from '@/icons/right-arrow-white.svg';
import LeftArrow from '@/icons/left-arrow-white.svg';
import EyesIcon from '@/icons/eyesIcon.svg';
import { usePopularMovie } from '@/hook/mainpage/usePopularMovie';
import { BASE_IMAGE_URL } from '@/api/mainpageAPI';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function PopularMovies() {
  const { data, isLoading, isError } = usePopularMovie();
  const [startIndex, setStartIndex] = useState(0);

  if (isLoading) {
    return <div> 로딩중</div>;
  }

  if (isError) {
    return <div> 네트워크 에러2</div>;
  }

  const limited = data?.results.slice(0, 10) || [];

  const handleNextSlide = () => {
    // 슬라이드 인덱스를 증가 (최대값을 넘지 않도록 처리)
    setStartIndex((prev) => Math.min(prev + 2, limited.length - 4));
  };

  const handlePrevSlide = () => {
    // 왼쪽 버튼 클릭 시 슬라이드 인덱스를 감소 (최소값 제한)
    setStartIndex((prev) => Math.max(prev - 2, 0));
  };

  return (
    <section className="relative ml-[8.5vw] mt-[72px] flex flex-col overflow-hidden">
      <h2 className="mb-12 text-2xl font-bold">🏆 인기 영화 TOP 10</h2>
      <ul
        className="flex gap-[2vw] transition-transform duration-500"
        style={{
          transform: `translateX(-${startIndex * 20}vw)`, // 슬라이드 이동
        }}
      >
        {limited?.map((poster, index) => (
          <motion.li
            whileHover={{ scale: 0.9 }}
            key={poster.id}
            className="relative h-[10.4vw] w-[18.7vw] shrink-0 cursor-pointer "
          >
            <Image
              src={`${BASE_IMAGE_URL}${poster.backdrop_path}`}
              layout="fill" // 부모의 크기에 맞춤
              objectFit="cover" // 부모 크기에 맞게 자름
              alt="세로 포스터"
              className="rounded-2xl"
            />
            <div className="absolute inset-0 rounded-2xl bg-black opacity-50" />
            <div className="absolute left-2 top-[-30px] text-5xl font-black italic text-white">
              {index + 1}
            </div>
            <div className="absolute inset-0 flex flex-col justify-between p-4">
              <div className="flex items-center justify-end gap-1">
                <EyesIcon />
                <span className="text-sm font-normal">{poster.vote_count}</span>
              </div>
              <div className="flex justify-between">
                <span className="w-[12vw] truncate text-xl font-semibold">
                  {poster.title}
                </span>
                <div>
                  <span className="text-base font-medium">
                    {poster.vote_average.toFixed(1)}
                  </span>
                  <span>{`(${poster.vote_count})`}</span>
                </div>
              </div>
            </div>
          </motion.li>
        ))}
      </ul>
      <div
        onClick={handleNextSlide}
        className={
          startIndex === 6
            ? 'hidden'
            : 'absolute bottom-0 right-0 flex h-[10.4vw] w-[45px] cursor-pointer items-center justify-center rounded-2xl bg-black opacity-25 hover:opacity-80'
        }
      >
        <RightArrow />
      </div>

      <div
        onClick={handlePrevSlide}
        className={
          startIndex === 0
            ? 'hidden'
            : 'absolute bottom-0 left-0 flex h-[10.4vw] w-[45px] cursor-pointer items-center justify-center rounded-2xl bg-black opacity-25 hover:opacity-80'
        }
      >
        <LeftArrow />
      </div>
    </section>
  );
}
