import { Acting, Genre, MovieData } from '@/types/detail/type';
import Image from 'next/image';
import defaultImage from '@/images/defaultImage.png';

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
  return (
    <div className="px-5 pb-10 text-white lg:px-20">
      <div className="mb-10 border-b-[1px] border-[#2D313A] pb-10">
        <h2 className="text-2xl font-semibold">{movieData.title}</h2>
        <span className="mb-2 mt-4 block text-base font-medium">시놉시스</span>
        <p className="text-sm font-normal">{movieData.overview}</p>
      </div>
      <div className="mb-10 border-b-[1px] border-[#2D313A]">
        <h2 className="mb-4 text-base font-medium">출연진</h2>
        <ul className="credit-scroll flex flex-nowrap gap-6 overflow-x-auto pb-10">
          {creditData.cast.map((acting: Acting) => {
            const actingImage =
              acting.profile_path !== null
                ? process.env.NEXT_PUBLIC_BACK_IMAGE_URL + acting.profile_path
                : defaultImage.src;
            return (
              <li className="flex min-w-[120px] flex-col items-center text-center">
                <div
                  className="mb-2 h-[100px] w-[100px] rounded-full bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${actingImage})` }}
                />
                <span className="break-keep text-sm font-bold">
                  {acting.name}
                </span>
                <span className="mb-1 mt-2 block break-keep text-xs">
                  {acting.character}
                </span>
              </li>
            );
          })}
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
