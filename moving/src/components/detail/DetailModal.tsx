import Logo from '@/images/Logo.svg';
import Star from '@/icons/starIcon.svg';
import Favorite from '@/icons/FavoriteIcon.svg';
import { useEffect, useState } from 'react';
import { match } from 'ts-pattern';
import SeriesTab from './components/SeriesTab';
import RelatedWorksTab from './components/RelatedWorksTab';
import UserReviewsTab from './components/UserReviewsTab';
import DetailsTab from './components/DetailsTab';
import TrailerTab from './components/TrailerTab';
import clsx from 'clsx';
import { useModalAnimateStore } from '@/lib/store/modalAnimateStore';
import { useRouter } from 'next/router';
import { useModalData } from '@/lib/hook/useModalData';

interface DetailModalProps {
  isOpacity: boolean;
}

export default function DetailModal({ isOpacity }: DetailModalProps) {
  const reviewFavoriteClass = 'flex items-center gap-2 text-xs text-white';
  const MOVIE_TAB_LIST = [
    '시리즈',
    '연관작품',
    '사용자 평',
    '상세정보',
    '예고편',
  ];
  const router = useRouter();
  const { movieNumber } = router.query;
  const [tabIsActive, setTabIsActive] = useState(0);
  const { modalAnimate, modalAnimateActive } = useModalAnimateStore();
  const {
    movieQuery,
    creditQuery,
    reviewQuery,
    trailerQuery,
    recommendationQuery,
    seriesQuery,
    ageQuery,
  } = useModalData(Number(movieNumber));

  // 영화 개봉년도
  const movieYear = new Date(movieQuery.data?.release_date).getFullYear();

  useEffect(() => {
    setTimeout(() => {
      setTabIsActive(0);
    }, 500);
  }, [isOpacity]);

  useEffect(() => {
    modalAnimateActive();
  }, [modalAnimate]);

  if (
    movieQuery.isLoading ||
    creditQuery.isLoading ||
    seriesQuery.isLoading ||
    creditQuery.isLoading ||
    reviewQuery.isLoading ||
    recommendationQuery.isLoading ||
    trailerQuery.isLoading
  ) {
    return <div>로딩중...</div>;
  }

  if (
    movieQuery.isError ||
    creditQuery.isError ||
    seriesQuery.isError ||
    creditQuery.isLoading ||
    reviewQuery.isError ||
    recommendationQuery.isError ||
    trailerQuery.isError
  ) {
    return <div>에러...</div>;
  }

  return (
    <div className="relative mx-auto w-full max-w-[1080px] bg-[#000000]">
      <div
        className={clsx(
          'mb-20 bg-cover bg-center bg-no-repeat px-20 pt-7',
          modalAnimate && 'animate-zoomBg'
        )}
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.9) 10%, rgba(0, 0, 0, 0.4) 100%), url(${process.env.NEXT_PUBLIC_BACK_IMAGE_URL}${movieQuery.data.backdrop_path})`,
        }}
      >
        <h2 className="mb-52">
          <Logo />
        </h2>
        <div>
          <div className="mb-4 flex items-center gap-6">
            <span className={`${reviewFavoriteClass} font-semibold`}>
              <Star />
              {movieQuery.data.vote_average}
            </span>
            <button className={`${reviewFavoriteClass} font-normal`}>
              <Favorite />
              관심
            </button>
          </div>
          <h3 className="flex items-end gap-4 text-[46px] font-semibold text-white">
            {movieQuery.data.title}{' '}
            <span className="text-3xl font-normal text-[#D9D9D9]">
              ({movieYear})
            </span>
          </h3>
          <ul className="flex items-center gap-2">
            {seriesQuery.data?.parts.length > 0 && (
              <li className="mb-6 mt-4 flex h-7 items-center justify-center rounded-xl border-[1px] border-white bg-[rgba(43,45,49,0.8)] px-4 text-xs font-normal text-white">
                시리즈 {seriesQuery.data?.parts.length}개
              </li>
            )}

            <li className="mb-6 mt-4 flex h-7 items-center justify-center rounded-xl border-[1px] border-white bg-[rgba(43,45,49,0.8)] px-4 text-xs font-normal text-white">
              {ageQuery.data.certification}세
            </li>
            {movieQuery.data.genres.map(
              (genre: { id: number; name: string }) => {
                return (
                  <li
                    key={genre.id}
                    className="mb-6 mt-4 flex h-7 items-center justify-center rounded-xl border-[1px] border-white bg-[rgba(43,45,49,0.8)] px-4 text-xs font-normal text-white"
                  >
                    {genre.name}
                  </li>
                );
              }
            )}
          </ul>
          <div className="flex justify-between gap-6">
            <p className="line-clamp-3 basis-[70%] break-keep text-sm font-normal text-white">
              {movieQuery.data.overview}
            </p>
            <button
              type="button"
              onClick={() => {
                router.push({
                  pathname: '/trailerPage',
                  query: { trailerKey: trailerQuery.data.key },
                });
              }}
              className="h-12 max-w-64 basis-[30%] rounded-xl bg-[#2D73F3] text-xl font-semibold text-white disabled:bg-gray"
              disabled={!trailerQuery.data}
            >
              {!trailerQuery.data ? '영상이 없습니다.' : '시청하기'}
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
                {tab} {index === 2 && `${reviewQuery.data.total_results}+`}
              </button>
            );
          })}
        </div>
      </div>

      {match(tabIsActive)
        .with(0, () => {
          return <SeriesTab seriesData={seriesQuery.data} />;
        })
        .with(1, () => {
          return (
            <RelatedWorksTab
              recommendationData={recommendationQuery.data}
              setTabIsActive={setTabIsActive}
            />
          );
        })
        .with(2, () => {
          return (
            <UserReviewsTab
              reviewData={reviewQuery.data}
              movieDataVote={movieQuery.data.vote_average}
            />
          );
        })
        .with(3, () => {
          return (
            <DetailsTab
              movieData={movieQuery.data}
              ageData={ageQuery.data}
              creditData={creditQuery.data}
            />
          );
        })
        .with(4, () => {
          return <TrailerTab trailerKey={trailerQuery.data.key} />;
        })
        .otherwise(() => {
          return <SeriesTab seriesData={seriesQuery.data} />;
        })}
    </div>
  );
}
