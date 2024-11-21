// 영화 타입 정의
export interface weeksTrendType {
  backdrop_path: string; // 배경 이미지 경로
  id: number; // 영화 ID
  title: string; // 영화 제목
  original_title: string; // 원제
  overview: string; // 줄거리
  poster_path: string; // 포스터 이미지 경로
  media_type: string; // 미디어 타입 (예: "movie")
  adult: boolean; // 성인 콘텐츠 여부
  original_language: string; // 원본 언어
  genre_ids: number[]; // 장르 ID 배열
  popularity: number; // 인기 지수
  release_date: string; // 출시일
  video: boolean; // 비디오 여부
  vote_average: number; // 평균 평점
  vote_count: number; // 평점 개수
}

// 페이지 타입 정의
export interface weeksTrendPageTypes {
  page: number; // 현재 페이지 번호
  results: weeksTrendType[]; // 영화 목록
}
