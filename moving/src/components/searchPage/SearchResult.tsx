import { BASE_IMAGE_URL } from '@/api/mainpageAPI';
import { useSearch } from '@/hook/searchpage/usesearch';
import { SearchResultProps } from '@/types/searchPage/searchMovie';
import Image from 'next/image';

export default function SearchResult({ query }: SearchResultProps) {
  const { data } = useSearch({
    query: query,
    page: 1,
  });

  return (
    <section className="mb-16">
      <h2 className="mb-4">
        <span className="text-base font-bold">검색결과</span>
        <span className="ml-2 rounded-lg border-[1px] border-[#f2b42e] px-2 py-[3px] text-xs">
          6+
        </span>
      </h2>
      <hr className="mb-9 border-[1px] text-[#f3f3f3]" />
      <ul className="flex flex-wrap gap-[1.4vw]">
        {data?.pages.map((page) =>
          page?.results.map((poster) => (
            <li key={poster.id}>
              <div className="w-[7.9vw] truncate">
                <div className="relative h-[11vw] ">
                  <Image
                    src={`${BASE_IMAGE_URL}${poster.poster_path}`}
                    layout="fill"
                    alt="세로 포스터"
                    className="rounded-2xl"
                    quality={100}
                  />
                </div>
                <span>{poster.title}</span>
              </div>
            </li>
          ))
        )}
      </ul>
    </section>
  );
}
