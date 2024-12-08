import { BASE_IMAGE_URL } from '@/api/mainpageAPI';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useGenreMovies } from '@/hook/genre/useGenreMovies';
import { useGenreStore } from '../../../store/useGenreStore';
import { useEffect, useState } from 'react';

export default function genre() {
  const router = useRouter();
  const { genre } = router.query;

  const { genres, fetchGenres } = useGenreStore(); // 스토어에서 genres와 fetchGenres 사용
  const [genreId, setGenreId] = useState<string | null>(null);

  useEffect(() => {
    // 장르 데이터를 가져오는 비동기 작업
    const fetchData = async () => {
      await fetchGenres(); // 스토어의 fetchGenres 호출
    };

    fetchData();
  }, [fetchGenres]);

  useEffect(() => {
    if (genre && genres) {
      // 장르 이름으로 ID 매핑
      const id = Object.entries(genres).find(
        ([_, name]) => name === genre
      )?.[0];
      if (id) setGenreId(id); // 장르 ID 설정
    }
  }, [genre, genres]);

  const { data } = useGenreMovies({
    genre: genreId || '', // genreId를 사용 (없으면 빈 값)
    year: '2024',
    page: '1',
  });

  return (
    <div className="pt-[76px]">
      <div className="mx-[13vw]">
        <h1 className="my-14 text-[40px] font-bold text-white">'{genre}'</h1>
        <section className="mb-16">
          <hr className="mb-9 border-[1px] text-[#f3f3f3]" />
          <ul className="flex flex-wrap gap-[1.4vw]">
            {data?.results.map((poster, index) => (
              <li key={index}>
                <div className="w-[7.9vw] truncate">
                  <div className="relative h-[11vw] ">
                    <Image
                      src={`${BASE_IMAGE_URL}${poster.poster_path}`}
                      layout="fill"
                      alt="세로 포스터"
                      className="rounded-2xl"
                    />
                  </div>
                  <span>{poster.title}</span>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
