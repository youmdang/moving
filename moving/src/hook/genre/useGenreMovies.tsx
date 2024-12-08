import { fetchGenreMovie } from '@/api/genreAPI';
import { fetchGenreMovieProps } from '@/types/genre/genrePage';
import { defaultMoviePageType } from '@/types/mainPage/defaultMovie';
import { useQuery } from '@tanstack/react-query';

export const useGenreMovies = ({ genre, year, page }: fetchGenreMovieProps) => {
  return useQuery<defaultMoviePageType>({
    queryKey: ['genre', genre, year, page],
    queryFn: () => fetchGenreMovie({ genre, year, page }),
    retry: 1,
  });
};
