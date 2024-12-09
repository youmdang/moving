import { useRelatedWorks } from '@/hook/searchpage/useRelatedWorks';
import { BASE_IMAGE_URL } from '@/api/mainpageAPI';
import { fetchRelatedWorksProps } from '@/types/searchPage/searchMovie';
import Image from 'next/image';

export default function RelatedWorks({ movieId }: fetchRelatedWorksProps) {
  const { data } = useRelatedWorks({
    movieId,
  });

  const limitedData = data?.results.slice(0, 16);

  return (
    <section className="mb-[143px]">
      <h2 className="mb-4">
        <span className="text-base font-bold">연관작품</span>
        <span className="ml-2 rounded-lg border-[1px] border-[#f2b42e] px-2 py-[3px] text-xs">
          16+
        </span>
      </h2>
      <hr className="mb-9 border-[1px] text-[#f3f3f3]" />
      <ul className="flex flex-wrap gap-[1.4vw]">
        {limitedData?.map((poster) => (
          <li key={poster.id}>
            <div className="w-[7.9vw] truncate">
              <div className="relative h-[11vw] w-[7.9vw]">
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
        ))}
      </ul>
    </section>
  );
}
