import { SeriesData } from '@/types/detail/type';
import Image from 'next/image';

interface SeriesTabProps {
  seriesData: SeriesData;
}

export default function SeriesTab({ seriesData }: SeriesTabProps) {
  return (
    <div className="px-20 pb-10 text-white">
      {seriesData.parts
        .sort(
          (a, b) =>
            new Date(a.release_date).getTime() -
            new Date(b.release_date).getTime()
        )
        .map((part) => {
          const movieYear = new Date(part.release_date).getFullYear();
          const posterImage =
            process.env.NEXT_PUBLIC_BACK_IMAGE_URL + part.poster_path;

          return (
            <div
              key={part.id}
              className="relative mb-12 flex w-[100%] gap-4 border-b-2 border-[#2D313A] pb-12"
            >
              <div className="flex-shrink-0">
                <Image
                  src={posterImage}
                  width={130}
                  height={178}
                  alt={`${part.title} 포스터 이미지`}
                />
              </div>
              <div className="basis-[80%] pr-20">
                <h3 className="mb-1 text-xl font-bold">{part.title}</h3>
                <div className="mb-4 flex items-center gap-3">
                  <span className="text-base font-medium">({movieYear})</span>
                  <span className="rounded-lg border-[1px] border-[#F29B2E] px-3 py-[2px] text-sm font-normal text-[#F29B2E]">
                    Hero
                  </span>
                </div>
                <p className="line-clamp-3">{part.overview}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
}
