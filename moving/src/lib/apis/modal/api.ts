import { axiosInstance } from '../instance/axiosInstance';

// 영화 데이터 가져오기
export const fetchMovieData = async ({
  movieId = 912649,
}: {
  movieId: number;
}) => {
  try {
    const response = await axiosInstance.get(`movie/${movieId}`);
    return response.data;
  } catch (error) {
    console.log('영화 데이터 오류', error);
  }
};

// 연령 제한 데이터 가져오기
export const fetchCertificationData = async ({
  movieId = 912649,
}: {
  movieId: number;
}) => {
  try {
    const response = await axiosInstance.get(`movie/${movieId}/release_dates`);
    return response.data;
  } catch (error) {
    console.log('연령제한 데이터 오류', error);
  }
};

// 시리즈 데이터 가져오기
export const fetchSeriesData = async ({
  collectionId = 558216,
}: {
  collectionId: number;
}) => {
  try {
    const response = await axiosInstance.get(`collection/${collectionId}`);
    return response.data;
  } catch (error) {
    console.log('시리즈 데이터 오류', error);
  }
};

export const fetchCreditData = async ({
  movieId = 912649,
}: {
  movieId: number;
}) => {
  try {
    const response = await axiosInstance.get(`movie/${movieId}/credits`);
    return response.data;
  } catch (error) {
    console.log('시리즈 데이터 오류', error);
  }
};
