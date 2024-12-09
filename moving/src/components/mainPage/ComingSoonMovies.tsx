import { BASE_IMAGE_URL } from '@/api/mainpageAPI';
import { useUpcomingMovie } from '@/hook/mainpage/useUpcomingMovie';
import dayjs from 'dayjs';
import Image from 'next/image';
import { motion } from 'framer-motion';
interface BeforeOpeningProps {
  handleModalOpen?: (id: number) => void;
}

export default function BeforeOpening({ handleModalOpen }: BeforeOpeningProps) {
  const { data, isLoading, isError } = useUpcomingMovie();

  const limited = data?.results.slice(0, 5);

  if (isLoading) {
    <div>로딩중</div>;
  }

  if (isError) {
    <div>네트워크 에러1</div>;
  }

  return (
    <section className="mx-[8.5vw] mt-[72px] flex flex-col">
      <h2 className="mb-7 text-2xl font-bold">❓곧 공개되는 신작영화</h2>
      <ul className="flex justify-between">
        {limited?.map((poster) => (
          <motion.li
            whileHover={{ scale: 1.1 }}
            onClick={() => {
              if (handleModalOpen) {
                handleModalOpen(poster.id);
              }
            }}
            key={poster.id}
            className="relative h-auto max-w-[14.53vw] cursor-pointer "
          >
            <div className="relative h-[18.54vw] w-[14.53vw] ">
              <Image
                src={`${BASE_IMAGE_URL}${poster.poster_path}`}
                layout="fill"
                alt="세로 포스터"
                className="rounded-2xl blur-[1px] "
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-center rounded-2xl border border-[#f2b42e] bg-black text-[1vw] text-[#f2b42e] opacity-80">
              <span className="mr-2 font-light">Released at</span>
              <span className="font-medium">
                {dayjs(poster.release_date).format('YYYY · MM')}
              </span>
            </div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
