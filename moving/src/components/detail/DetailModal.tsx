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
  fetchRecommendationData,
  fetchReviewData,
  fetchSeriesData,
  fetchTrailerData,
} from '@/lib/apis/modal/api';
import { useRouter } from 'next/router';

interface DetailModalProps {
  isOpacity: boolean;
}

export default function DetailModal({ isOpacity }: DetailModalProps) {
  const reviewFavoriteClass = 'flex items-center gap-2 text-xs text-white';
  const MOVIE_TAB_LIST = ['시리즈', '연관작품', '사용자 평', '상세정보'];
  const [tabIsActive, setTabIsActive] = useState(0);
  const [movieId, setMovieId] = useState<number>(1159311);
  const router = useRouter();

  // 영화 데이터
  const {
    data: movieData,
    isLoading: movieIsLoading,
    isError: movieIsError,
  } = useQuery({
    queryKey: ['movieData', movieId],
    queryFn: async () => {
      const res = await fetchMovieData({ movieId: movieId });
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
    queryKey: ['creditData', movieId],
    queryFn: async () => {
      const res = await fetchCreditData({ movieId: movieId });
      return res;
    },
  });

  // 영화 리뷰 데이터
  const {
    data: reviewData,
    isLoading: reviewIsLoading,
    isError: reviewIsError,
  } = useQuery({
    queryKey: ['reviewData', movieId],
    queryFn: async () => {
      const res = await fetchReviewData({ movieId: movieId, language: null });
      return res;
    },
  });

  // 영화 예고편 데이터
  const {
    data: trailerData,
    isLoading: trailerIsLoading,
    isError: trailerIsError,
  } = useQuery({
    queryKey: ['trailerData', movieId],
    queryFn: async () => {
      const res = await fetchTrailerData({
        movieId: movieId,
      });
      console.log(res);
      if (res.results.length < 1) {
        return false;
      }
      return res.results[0];
    },
  });

  // 영화 관련작품 데이터
  const {
    data: recommendationData,
    isLoading: recommendationIsLoading,
    isError: recommendationIsError,
  } = useQuery({
    queryKey: ['recommendationData', movieId],
    queryFn: async () => {
      const res = await fetchRecommendationData({ movieId: movieId });
      return res;
    },
  });

  // 영화 시리즈 데이터
  const {
    data: seriesData,
    isLoading: seriesIsLoading,
    isError: seriesIsError,
  } = useQuery({
    queryKey: ['seriesData', movieId],
    queryFn: async () => {
      const res = await fetchSeriesData({
        collectionId: movieData.belongs_to_collection.id,
      });
      return res;
    },
  });

  // 영화 나이제한 데이터
  const {
    data: ageData,
    isLoading: ageIsLoading,
    isError: ageIsError,
  } = useQuery({
    queryKey: ['ageData', movieId],
    queryFn: async () => {
      const res = await fetchCertificationData({ movieId: movieId });
      const krData = res.results.find((key: { iso_3166_1: string }) => {
        if (key.iso_3166_1 === 'KR') {
          return key.iso_3166_1 === 'KR';
        } else {
          return key.iso_3166_1 === 'US';
        }
      });
      console.log(krData);
      return krData.release_dates[0];
    },
  });

  const movieYear = new Date(movieData?.release_date).getFullYear(); // 영화 개봉년도

  useEffect(() => {
    setTimeout(() => {
      setTabIsActive(0);
    }, 500);
  }, [isOpacity]);

  if (
    movieIsLoading ||
    ageIsLoading ||
    seriesIsLoading ||
    creditIsLoading ||
    reviewIsLoading ||
    recommendationIsLoading ||
    trailerIsLoading
  ) {
    return <div>로딩중...</div>;
  }

  if (
    movieIsError ||
    ageIsError ||
    seriesIsError ||
    creditIsError ||
    reviewIsError ||
    recommendationIsError ||
    trailerIsError
  ) {
    return <div>에러...</div>;
  }

  return (
    <div className="relative mx-auto w-full max-w-[1080px] bg-[#000000]">
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
              시리즈 {seriesData?.parts.length}개
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
              onClick={() => {
                router.push({
                  pathname: '/trailerPage',
                  query: { trailerKey: trailerData.key },
                });
              }}
              className="h-12 max-w-64 basis-[30%] rounded-xl bg-[#2D73F3] text-xl font-semibold text-white disabled:bg-gray"
              disabled={!trailerData}
            >
              {!trailerData ? '영상이 없습니다.' : '시청하기'}
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
                {tab} {index === 2 && `${reviewData.total_results}+`}
              </button>
            );
          })}
        </div>
      </div>

      {match(tabIsActive)
        .with(0, () => {
          return <SeriesTab seriesData={seriesData} setMovieId={setMovieId} />;
        })
        .with(1, () => {
          return (
            <RelatedWorksTab
              recommendationData={recommendationData}
              setMovieId={setMovieId}
              setTabIsActive={setTabIsActive}
            />
          );
        })
        .with(2, () => {
          return (
            <UserReviewsTab
              reviewData={reviewData}
              movieDataVote={movieData.vote_average}
            />
          );
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
          return <SeriesTab seriesData={seriesData} setMovieId={setMovieId} />;
        })}
    </div>
  );
}
