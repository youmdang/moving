import { Genre, MovieData } from '@/types/detail/type';
import Image from 'next/image';

interface DetailsTabProps {
  movieData: MovieData;
  ageData: any;
  creditData: any;
}

export default function DetailsTab({
  movieData,
  ageData,
  creditData,
}: DetailsTabProps) {
  const posterImage =
    process.env.NEXT_PUBLIC_BACK_IMAGE_URL + movieData.poster_path;
  const dateYear = new Date(movieData.release_date).getFullYear();
  const dateMonth = new Date(movieData.release_date).getMonth();
  const writing = creditData.crew.find((key: any) => key.job === 'Director');
  console.log(writing);
  return (
    <div className="px-20 pb-10 text-white">
      <div className="mb-10 border-b-[1px] border-[#2D313A] pb-10">
        <h2 className="text-2xl font-semibold">{movieData.title}</h2>
        <span className="mb-2 mt-4 block text-base font-medium">시놉시스</span>
        <p className="text-sm font-normal">{movieData.overview}</p>
      </div>
      <div className="mb-10 border-b-[1px] border-[#2D313A] pb-10">
        <h2 className="mb-4 text-base font-medium">출연진</h2>
        <ul className="flex gap-6">
          <li className="flex flex-col items-center justify-center">
            <Image
              src="/images/testImage.png"
              width={80}
              height={80}
              alt="출연진 이미지"
            />
            <span className="mb-1 mt-2 block text-xs">한글 이름</span>
            <span className="text-xs">영어 이름</span>
          </li>
          <li className="flex flex-col items-center justify-center">
            <Image
              src="/images/testImage.png"
              width={80}
              height={80}
              alt="출연진 이미지"
            />
            <span className="mb-1 mt-2 block text-xs">한글 이름</span>
            <span className="text-xs">영어 이름</span>
          </li>
          <li className="flex flex-col items-center justify-center">
            <Image
              src="/images/testImage.png"
              width={80}
              height={80}
              alt="출연진 이미지"
            />
            <span className="mb-1 mt-2 block text-xs">한글 이름</span>
            <span className="text-xs">영어 이름</span>
          </li>
          <li className="flex flex-col items-center justify-center">
            <Image
              src="/images/testImage.png"
              width={80}
              height={80}
              alt="출연진 이미지"
            />
            <span className="mb-1 mt-2 block text-xs">한글 이름</span>
            <span className="text-xs">영어 이름</span>
          </li>
        </ul>
      </div>
      <div className="mb-10 flex gap-5 pb-10">
        <div className="mb-2 flex-shrink-0">
          <Image
            src={posterImage}
            width={130}
            height={178}
            alt="포스터 이미지"
          />
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-base font-bold">{movieData.tagline}</h3>
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold">개요</span>
            <span className="text-sm font-normal">{`${dateYear} ・ ${dateMonth}`}</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold">장르</span>

            <span className="text-sm font-normal">
              {movieData.genres.map((genre: Genre, index) => {
                return (
                  <i key={genre.id} className="mr-1 not-italic">
                    {genre.name}
                    {index !== movieData.genres.length - 1 && ','}
                  </i>
                );
              })}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold">감독</span>
            <span className="text-sm font-normal">{writing.name}</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold">등급</span>
            <span className="text-sm font-normal">{ageData.certification}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
