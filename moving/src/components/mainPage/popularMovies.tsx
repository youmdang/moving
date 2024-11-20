import Image from 'next/image';
import RightArrow from '@/icons/right-arrow-white.svg';
import EyesIcon from '@/icons/eyesIcon.svg';

const posterData = [
  {
    id: 1,
    src: '/images/mainpage-width-image.png',
    title: 'The Green Mile',
    year: '2016',
    rating: '9.2',
    genre: 'Biographical',
  },
  {
    id: 2,
    src: '/images/mainpage-width-image.png',
    title: 'The Green Mile',
    year: '2016',
    rating: '9.2',
    genre: 'Biographical',
  },
  {
    id: 3,
    src: '/images/mainpage-width-image.png',
    title: 'The Green Mile',
    year: '2016',
    rating: '9.2',
    genre: 'Biographical',
  },
  {
    id: 4,
    src: '/images/mainpage-width-image.png',
    title: 'The Green Mile',
    year: '2016',
    rating: '9.2',
    genre: 'Biographical',
  },
  {
    id: 5,
    src: '/images/mainpage-width-image.png',
    title: 'The Green Mile',
    year: '2016',
    rating: '9.2',
    genre: 'Biographical',
  },
  {
    id: 6,
    src: '/images/mainpage-width-image.png',
    title: 'The Green Mile',
    year: '2016',
    rating: '9.2',
    genre: 'Biographical',
  },
  {
    id: 7,
    src: '/images/mainpage-width-image.png',
    title: 'The Green Mile',
    year: '2016',
    rating: '9.2',
    genre: 'Biographical',
  },
  {
    id: 8,
    src: '/images/mainpage-width-image.png',
    title: 'The Green Mile',
    year: '2016',
    rating: '9.2',
    genre: 'Biographical',
  },
  {
    id: 9,
    src: '/images/mainpage-width-image.png',
    title: 'The Green Mile',
    year: '2016',
    rating: '9.2',
    genre: 'Biographical',
  },
  {
    id: 10,
    src: '/images/mainpage-width-image.png',
    title: 'The Green Mile',
    year: '2016',
    rating: '9.2',
    genre: 'Biographical',
  },
];

export default function PopularMovies() {
  return (
    <section className="ml-[160px] mt-[72px] flex flex-col overflow-hidden">
      <h2 className="mb-12 text-2xl font-bold">🏆 인기 영화 TOP 10</h2>
      <ul className="relative flex gap-[40px] ">
        {posterData.map((poster, index) => (
          <li
            key={poster.id}
            className="relative h-[199px] w-[359px] shrink-0 overflow-visible"
          >
            <Image
              src={poster.src}
              layout="fill" // 부모의 크기에 맞춤
              objectFit="cover" // 부모 크기에 맞게 자름
              alt="세로 포스터"
            />
            <div className="absolute inset-0 bg-black opacity-50" />
            <div className="absolute left-2 top-[-30px] text-5xl font-black italic text-white">
              {index + 1}
            </div>
            <div className="absolute inset-0 flex flex-col justify-between p-4">
              <div className="flex items-center justify-end gap-1">
                <EyesIcon /> <span className="text-sm font-normal">2.4k</span>
              </div>

              <div className="flex justify-between">
                <span className="text-xl font-semibold">
                  엘리멘탈: 재미있어!
                </span>
                <div>
                  <span className="text-base font-medium">4.9</span>{' '}
                  <span>(396)</span>
                </div>
              </div>
            </div>
          </li>
        ))}
        <div className="absolute right-0 top-[50%] flex h-full w-[45px] -translate-y-[50%] cursor-pointer items-center justify-center bg-black opacity-25 hover:opacity-80">
          <RightArrow />
        </div>
      </ul>
    </section>
  );
}
