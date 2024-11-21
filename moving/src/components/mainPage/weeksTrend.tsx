import Image from 'next/image';
import StarIcon from '@/icons/starIcon.svg';
import { useWeekTrend } from '@/hook/useWeekTrend';

export default function WeeksTrend() {
  const { data } = useWeekTrend();

  const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

  const limitedData = data?.results.slice(0, 6);

  return (
    <section className="mx-[8.5vw] mt-[96px] flex flex-col ">
      <h2 className="mb-7 text-2xl font-bold">🔥이번주 트렌드</h2>
      <ul className="flex gap-[72px]">
        {limitedData?.map((poster) => (
          <li key={poster.id} className="h-auto max-w-[207px] ">
            <Image
              src={`${BASE_IMAGE_URL}${poster.poster_path}`}
              width={202.77}
              height={290}
              alt="세로 포스터"
              className="max-h-[290px] rounded-2xl object-cover"
            />
            <div className=" my-2 flex items-center justify-between">
              <span className=" break-normal text-[1vw] font-semibold">
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
              <span className="text-sm">2016</span>
              <span className="ml-2 rounded-lg border border-[#f2b42e] px-2 py-[3px] text-[0.65vw]">
                Biographical
              </span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
