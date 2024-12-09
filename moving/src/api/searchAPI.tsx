import { authAxiosInstance } from '@/lib/axiosInstance';
import { fetchSearchMoviesProps } from '@/types/searchPage/searchMovie';

export const fetchSearchMovies = async ({
  query,
  page,
}: fetchSearchMoviesProps) => {
  const response = await authAxiosInstance.get(
    `search/movie?query=${query}&include_adult=false&language=ko&page=${page}`
  );
  return response.data;
};
