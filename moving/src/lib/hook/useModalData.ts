import { useQuery } from '@tanstack/react-query';
import {
  fetchCertificationData,
  fetchCreditData,
  fetchMovieData,
  fetchRecommendationData,
  fetchReviewData,
  fetchSeriesData,
  fetchTrailerData,
} from '../apis/modal/api';

export const useModalData = (movieId: number) => {
  // 영화 데이터
  const movieQuery = useQuery({
    queryKey: ['movieData', movieId],
    queryFn: async () => await fetchMovieData({ movieId }),
  });

  // 출연진 데이터
  const creditQuery = useQuery({
    queryKey: ['creditData', movieId],
    queryFn: async () => await fetchCreditData({ movieId }),
  });

  // 리뷰 데이터
  const reviewQuery = useQuery({
    queryKey: ['reviewData', movieId],
    queryFn: async () => await fetchReviewData({ movieId }),
  });

  // 예고편 데이터
  const trailerQuery = useQuery({
    queryKey: ['trailerData', movieId],
    queryFn: async () => {
      const res = await fetchTrailerData({ movieId });
      return res.results.length < 1 ? false : res.results[0];
    },
  });

  // 관련작품 데이터
  const recommendationQuery = useQuery({
    queryKey: ['recommendationData', movieId],
    queryFn: async () => await fetchRecommendationData({ movieId }),
  });

  // 시리즈 데이터
  const seriesQuery = useQuery({
    queryKey: ['seriesData', movieId],
    queryFn: async () => {
      return fetchSeriesData({
        collectionId: movieQuery.data?.belongs_to_collection.id,
      });
    },
  });

  // 나이제한 데이터
  const ageQuery = useQuery({
    queryKey: ['ageData', movieId],
    queryFn: async () => {
      const res = await fetchCertificationData({ movieId });

      const krData = res.results.find(
        (key: { iso_3166_1: string }) =>
          key.iso_3166_1 === 'KR' || key.iso_3166_1 === 'US'
      );
      return krData.release_dates[0];
    },
  });

  return {
    movieQuery,
    creditQuery,
    reviewQuery,
    trailerQuery,
    recommendationQuery,
    seriesQuery,
    ageQuery,
  };
};
