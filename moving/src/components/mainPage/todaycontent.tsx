import Image from 'next/image';
import StarIcon from '@/icons/starIcon.svg';
import { useGenreStore } from '../../../store/useGenreStore';
import { useEffect } from 'react';
import { useTodayMovie } from '@/hook/mainpage/useTodayMovie';
import dayjs from 'dayjs';
import { BASE_IMAGE_URL } from '@/api/mainpageAPI';
import { motion } from 'framer-motion';

export default function TodayContent() {
  const { genres, fetchGenres } = useGenreStore();
  const { data, isLoading, isError } = useTodayMovie();

  useEffect(() => {
    if (Object.keys(genres).length === 0) {
      fetchGenres();
    }
  }, [genres, fetchGenres]);

  // genre_ids 배열을 장르 이름으로 변환
  const getGenreNames = (genreIds: number[]): string[] => {
    return genreIds.map((id) => genres[id] || '알 수 없음');
  };

  const limitedData = data?.results.slice(0, 6);

  if (isLoading) {
    return <div> 로딩중</div>;
  }

  if (isError) {
    return <div>네트워크 에러</div>;
  }

  return (
    <section className="mx-[8.5vw] mt-[96px] flex flex-col ">
      <h2 className="mb-7 text-2xl font-bold">오늘은 이 컨텐츠 어때요?</h2>
      <ul className="flex justify-between">
        {limitedData?.map((poster) => (
          <motion.li
            whileHover={{ scale: 1.1 }}
            key={poster.id}
            className="h-auto max-w-[11vw] cursor-pointer "
          >
            <div className="relative h-[14.5vw] w-[10.53vw] ">
              <Image
                src={`${BASE_IMAGE_URL}${poster.poster_path}`}
                layout="fill"
                alt="세로 포스터"
                className="max-h-[290px] rounded-2xl object-cover"
              />
            </div>
            <div className=" my-2 flex items-center justify-between">
              <span className="max-w-[6.5vw] truncate break-normal text-[1vw] font-semibold">
                {poster.title}
              </span>
              <div className="ml-1 flex items-center">
                <StarIcon />
                <span className="ml-2 text-sm">
                  {poster.vote_average.toFixed(1)}
                </span>
              </div>
            </div>
            <div className="flex items-center">
              <span className="text-sm">
                {dayjs(poster.release_date).format('YYYY')}
              </span>
              <span className="ml-2 truncate rounded-lg border border-[#f2b42e] px-2 py-[3px] text-[0.65vw]">
                {getGenreNames(poster.genre_ids).join(', ')}
              </span>
            </div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
