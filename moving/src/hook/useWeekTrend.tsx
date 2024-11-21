import { fetchWeekTrend } from '@/api/mainpageAPI';
import { weeksTrendPageTypes } from '@/types/weeksTrend';
import { useQuery } from '@tanstack/react-query';

export const useWeekTrend = () => {
  return useQuery<weeksTrendPageTypes>({
    queryKey: ['weeksTrend'],
    queryFn: fetchWeekTrend,
  });
};
