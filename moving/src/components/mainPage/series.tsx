import Image from 'next/image';
import StarIcon from '@/icons/starIcon.svg';

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

export default function Series() {
  return (
    <section className="mx-[8.5vw] mt-[96px] flex flex-col ">
      <h2 className="mb-7 text-2xl font-bold">🎬 명작 시리즈를 한번에</h2>
      <ul className="flex gap-[72px]">
        {posterData.map((poster) => (
          <li key={poster.id} className="h-auto max-w-[207px] ">
            <Image
              src={poster.src}
              width={206.67}
              height={279}
              alt="세로 포스터"
            />
            <div className="my-2 flex items-center justify-between">
              <div className="text-[1vw] font-semibold">The Green Mile</div>
              <div className="ml-1 flex items-center">
                <StarIcon />
                <span className="ml-2 text-sm">9.2</span>
              </div>
            </div>
            <div className="flex items-center">
              <span className="text-sm">2016</span>
              <span className="ml-2 rounded-lg border border-[#f2b42e] px-2 py-[3px] text-[0.65vw]">
                Biographical
              </span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
