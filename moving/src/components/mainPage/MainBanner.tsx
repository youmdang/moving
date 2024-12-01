import Image from 'next/image';
import LeftArrow from '@/icons/left-arrow-Icon.svg';
import RightArrow from '@/icons/right-arrow-Icon.svg';
import {
  useDirector,
  useRecommendationMovie,
} from '@/hook/useRecommendationMovie';
import { BASE_IMAGE_URL } from '@/api/mainpageAPI';
import { CrewMember } from '@/types/mainPage/mainbanner';
import { useVideos } from '@/hook/useVideos';

export default function MainBanner() {
  const { data: bannerImage, isLoading, isError } = useRecommendationMovie();

  const limitedData = bannerImage?.results.slice(0, 4);
  const movieId = limitedData ? limitedData[0].id : null;
  const { data: directorData } = useDirector(movieId ?? 0);
  const { data: videoData } = useVideos(movieId ?? 0);

  const director = directorData?.crew?.find(
    (person: CrewMember) => person.job === 'Director'
  );

  if (isLoading) {
    return <div> 로딩중</div>;
  }

  if (isError) {
    return <div>네트워크 에러</div>;
  }

  if (!limitedData || limitedData.length === 0) {
    return <div>추천영화가 없습니다.</div>;
  }

  return (
    <section className="">
      <div className="relative h-auto w-full">
        <div
          className="absolute inset-0 
      bg-gradient-to-t from-[#131518] to-[rgba(59,63,69,0)]"
        />
        <div className="flex h-[708px] w-full items-center justify-center overflow-hidden">
          <iframe
            width={3320}
            height={1538}
            src={`https://www.youtube.com/embed/${videoData?.results[0].key}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0`}
            title={videoData?.results[0].name}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        </div>

        {/* <Image
          src={'/images/mainBanner.png'}
          layout="responsive" // 반응형 크기 조정
          width={1920} // 원본 이미지 너비
          height={708} // 원본 이미지 높이
          alt="메인 베너"
        /> */}
        <div className="absolute bottom-0 mx-[8.5vw] text-center text-white">
          <h1 className="flex flex-col gap-2 text-start text-white ">
            <span className="ml-1 text-base">{director?.name}</span>
            <span className="text-[3.1vw] font-semibold">
              {limitedData[0].title}
            </span>
          </h1>
          <ul className="relative flex gap-[2.45vw]">
            <div className="absolute left-[-25px] top-[50%] flex h-[50px] w-[50px] -translate-y-1/2 transform items-center justify-center rounded-full bg-white">
              <LeftArrow />
            </div>
            {limitedData?.map((poster) => (
              <li className="h-auto max-w-[358px]">
                <Image
                  key={poster.id}
                  src={`${BASE_IMAGE_URL}${poster.backdrop_path}`}
                  width={358}
                  height={190}
                  alt="가로 이미지"
                  className=" rounded-2xl"
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
  );
}
