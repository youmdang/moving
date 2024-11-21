import { authAxiosInstance } from '@/lib/axiosInstance';

//이번주 트랜드 GET
export const fetchWeekTrend = async () => {
  const response = await authAxiosInstance.get(
    'trending/movie/week?language=ko'
  );
  return response.data;
};

// 게임원작 영화 GET
export const fetchGameMovie = async () => {
  const response = await authAxiosInstance.get(
    'discover/movie?api_key=YOUR_API_KEY&with_keywords=818'
  );
  return response.data;
};

// 미개봉 신작영화 GET
export const fetchComingSoonMovies = async () => {
  const response = await authAxiosInstance.get(
    'movie/upcoming?language=ko&page=1'
  );
  return response.data;
};

// 인기 영화 TOP 10 GET
export const fetchPopular = async () => {
  const response = await authAxiosInstance.get(
    'movie/popular?language=ko&page=1'
  );
  return response.data.results;
};

// 명장 시리즈 GET
// movie 타입 지정해야함 -> movie/movie.id 여기에 해당하는 타입지정 해야함
export const fetchSeries = async () => {
  const movies = await fetchPopular();

  const moviesWithCollections = await Promise.all(
    movies.map(async (movie: any) => {
      const detail = await authAxiosInstance
        .get(`movie/${movie.id}`)
        .catch(() => null);
      if (detail?.data.belongs_to_collection) {
        return {
          ...movie,
          collection: detail.data.belongs_to_collection,
        };
      }
      return null;
    })
  );

  return moviesWithCollections.filter((movie) => movie !== null);
};

// 오늘의 컨텐츠 GET
export const fetchToday = async () => {
  try {
    const response = await authAxiosInstance.get(
      'trending/movie/day?language=ko'
    );

    const trending = response.data.results;

    const randomIndex = Math.floor(Math.random() * trending.length);
    const todayContent = trending[randomIndex];

    return todayContent;
  } catch (error) {
    console.error('Error fetching trending content:', error);
    return null;
  }
};
