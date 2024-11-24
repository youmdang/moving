import { fetchGameMovie } from '@/api/mainpageAPI';
import { defaultMoviePageType } from '@/types/defaultMovie';
import { useQuery } from '@tanstack/react-query';

export const useGameMovie = () => {
  return useQuery<defaultMoviePageType>({
    queryKey: ['gamemovie'],
    queryFn: fetchGameMovie,
  });
};
