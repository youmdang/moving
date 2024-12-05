import { BASE_IMAGE_URL } from '@/api/mainpageAPI';
import Image from 'next/image';

export default function genre() {
  const posterData = [
    {
      id: 1,
      src: '/images/mainpage-length-image.png',
      title: 'The Green Mile',
      year: '2016',
      rating: '9.2',
      genre: 'Biographical',
    },
    {
      id: 2,
      src: '/images/mainpage-length-image.png',
      title: 'The Green Mile',
      year: '2016',
      rating: '9.2',
      genre: 'Biographical',
    },
    {
      id: 3,
      src: '/images/mainpage-length-image.png',
      title: 'The Green Mile',
      year: '2016',
      rating: '9.2',
      genre: 'Biographical',
    },
    {
      id: 4,
      src: '/images/mainpage-length-image.png',
      title: 'The Green Mile',
      year: '2016',
      rating: '9.2',
      genre: 'Biographical',
    },
    {
      id: 5,
      src: '/images/mainpage-length-image.png',
      title: 'The Green Mile',
      year: '2016',
      rating: '9.2',
      genre: 'Biographical',
    },
    {
      id: 6,
      src: '/images/mainpage-length-image.png',
      title: 'The Green Mile',
      year: '2016',
      rating: '9.2',
      genre: 'Biographical',
    },
  ];

  return (
    <div className="pt-[76px]">
      <div className="mx-[260px]">
        <h1 className="my-14">
          <span className="text-[40px] font-bold text-white">'해리포터'</span>
          <span className="text-xl font-normal text-[#d9d9d9]"> 검색결과</span>
        </h1>
        <section className="mb-16">
          <h2 className="mb-4">
            <span className="text-base font-bold">검색결과</span>
            <span className="ml-2 rounded-lg border-[1px] border-[#f2b42e] px-2 py-[3px] text-xs">
              6+
            </span>
          </h2>
          <hr className="mb-9 border-[1px] text-[#f3f3f3]" />
          <ul className="flex gap-6">
            {posterData.map((poster, index) => (
              <li key={index}>
                <div className="relative h-[210px] w-[151px]">
                  <Image
                    src={poster.src}
                    layout="fill"
                    alt="세로 포스터"
                    className="rounded-2xl"
                    quality={100}
                  />
                </div>
                <span>{poster.title}</span>
              </li>
            ))}
          </ul>
        </section>
        <section className="mb-[143px]">
          <h2 className="mb-4">
            <span className="text-base font-bold">검색결과</span>
            <span className="ml-2 rounded-lg border-[1px] border-[#f2b42e] px-2 py-[3px] text-xs">
              6+
            </span>
          </h2>
          <hr className="mb-9 border-[1px] text-[#f3f3f3]" />
          <ul className="flex gap-6">
            {posterData.map((poster, index) => (
              <li key={index}>
                <div className="relative h-[210px] w-[151px]">
                  <Image
                    src={poster.src}
                    layout="fill"
                    alt="세로 포스터"
                    className="rounded-2xl"
                    quality={100}
                  />
                </div>
                <span>{poster.title}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
