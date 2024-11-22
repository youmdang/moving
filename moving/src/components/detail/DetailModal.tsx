import Logo from '@/images/Logo.svg';
import Star from '@/icons/starIcon.svg';
import Favorite from '@/icons/FavoriteIcon.svg';
import { useEffect, useState } from 'react';
import { match } from 'ts-pattern';
import SeriesTab from './components/SeriesTab';
import RelatedWorksTab from './components/RelatedWorksTab';
import UserReviewsTab from './components/UserReviewsTab';
import DetailsTab from './components/DetailsTab';
import { useQuery } from '@tanstack/react-query';
import {
  fetchCertificationData,
  fetchCreditData,
  fetchMovieData,
  fetchSeriesData,
} from '@/lib/apis/modal/api';

interface DetailModalProps {
  isOpacity: boolean;
}

export default function DetailModal({ isOpacity }: DetailModalProps) {
  const reviewFavoriteClass = 'flex items-center gap-2 text-xs text-white';
  const MOVIE_TAB_LIST = ['시리즈', '연관작품', '사용자 평', '상세정보'];
  const [tabIsActive, setTabIsActive] = useState(0);

  // 영화 데이터
  const {
    data: movieData,
    isLoading: movieIsLoading,
    isError: movieIsError,
  } = useQuery({
    queryKey: ['movieData'],
    queryFn: async () => {
      const res = await fetchMovieData({ movieId: 912649 });
      console.log(res);
      return res;
    },
  });

  // 영화 출연진 데이터
  const {
    data: creditData,
    isLoading: creditIsLoading,
    isError: creditIsError,
  } = useQuery({
    queryKey: ['creditData'],
    queryFn: async () => {
      const res = await fetchCreditData({ movieId: 912649 });
      console.log(res);
      return res;
    },
  });

  // 영화 시리즈 데이터
  const {
    data: seriesData,
    isLoading: seriesIsLoading,
    isError: seriesIsError,
  } = useQuery({
    queryKey: ['seriesData'],
    queryFn: async () => {
      const res = await fetchSeriesData({
        collectionId: movieData.belongs_to_collection.id,
      });
      console.log(res);
      return res;
    },
  });

  // 영화 나이제한 데이터
  const {
    data: ageData,
    isLoading: ageIsLoading,
    isError: ageIsError,
  } = useQuery({
    queryKey: ['ageData'],
    queryFn: async () => {
      const res = await fetchCertificationData({ movieId: 912649 });
      const krData = res.results.find((key: { iso_3166_1: string }) => {
        return key.iso_3166_1 === 'KR';
      });
      return krData.release_dates[0];
    },
  });

  const movieYear = new Date(movieData?.release_date).getFullYear(); // 영화 개봉년도

  useEffect(() => {
    setTabIsActive(0);
  }, [isOpacity]);

  if (movieIsLoading || ageIsLoading || seriesIsLoading || creditIsLoading) {
    return <div>로딩중...</div>;
  }

  if (movieIsError || ageIsError || seriesIsError || creditIsError) {
    return <div>에러...</div>;
  }

  return (
    <div className="bg-[#000000 relative mx-auto w-full max-w-[1080px] overflow-y-auto">
      <div
        className="mb-20 animate-zoomBg bg-cover bg-center bg-no-repeat px-20 pt-7"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.9) 10%, rgba(0, 0, 0, 0.4) 100%), url(${process.env.NEXT_PUBLIC_BACK_IMAGE_URL}${movieData.backdrop_path})`,
        }}
      >
        <h2 className="mb-52">
          <Logo />
        </h2>
        <div>
          <div className="mb-4 flex items-center gap-6">
            <span className={`${reviewFavoriteClass} font-semibold`}>
              <Star />
              {movieData.vote_average}
            </span>
            <button className={`${reviewFavoriteClass} font-normal`}>
              <Favorite />
              관심
            </button>
          </div>
          <h3 className="flex items-end gap-4 text-5xl font-semibold text-white">
            {movieData.title}{' '}
            <span className="text-3xl font-normal text-[#D9D9D9]">
              ({movieYear})
            </span>
          </h3>
          <ul className="flex items-center gap-2">
            <li className="mb-6 mt-4 flex h-7 items-center justify-center rounded-xl border-[1px] border-white bg-[rgba(43,45,49,0.8)] px-4 text-xs font-normal text-white">
              시리즈 {seriesData.parts.length}개
            </li>
            <li className="mb-6 mt-4 flex h-7 items-center justify-center rounded-xl border-[1px] border-white bg-[rgba(43,45,49,0.8)] px-4 text-xs font-normal text-white">
              {ageData.certification}세
            </li>
            {movieData.genres.map((genre: { id: number; name: string }) => {
              return (
                <li
                  key={genre.id}
                  className="mb-6 mt-4 flex h-7 items-center justify-center rounded-xl border-[1px] border-white bg-[rgba(43,45,49,0.8)] px-4 text-xs font-normal text-white"
                >
                  {genre.name}
                </li>
              );
            })}
          </ul>
          <div className="flex justify-between gap-6">
            <p className="line-clamp-3 basis-[70%] break-keep text-sm font-normal text-white">
              {movieData.overview}
            </p>
            <button
              type="button"
              className="h-12 max-w-64 basis-[30%] rounded-xl bg-[#2D73F3] text-xl font-semibold text-white"
            >
              시청하기
            </button>
          </div>
        </div>
      </div>
      <div className="px-20">
        <div className="mb-12 flex w-full items-center gap-4 border-b-2 border-white pb-4">
          {MOVIE_TAB_LIST.map((tab, index) => {
            const isActive =
              index === tabIsActive
                ? 'modal-tab-active text-[#2D73F3]'
                : 'text-white';
            return (
              <button
                key={index}
                type="button"
                onClick={() => {
                  setTabIsActive(index);
                }}
                className={`relative px-4 text-base font-bold ${isActive}`}
              >
                {tab} {index === 2 && '28+'}
              </button>
            );
          })}
        </div>
      </div>

      {match(tabIsActive)
        .with(0, () => {
          return <SeriesTab seriesData={seriesData} />;
        })
        .with(1, () => {
          return <RelatedWorksTab />;
        })
        .with(2, () => {
          return <UserReviewsTab />;
        })
        .with(3, () => {
          return (
            <DetailsTab
              movieData={movieData}
              ageData={ageData}
              creditData={creditData}
            />
          );
        })
        .otherwise(() => {
          return <SeriesTab seriesData={seriesData} />;
        })}
    </div>
  );
}
