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
];

export default function BeforeOpening() {
  return (
    <section className="mx-[160px] mt-[72px] flex flex-col">
      <h2 className="mb-7 text-2xl font-bold">❓곧 공개되는 신작영화</h2>
      <ul className="flex gap-[60px]">
        {posterData.map((poster) => (
          <li key={poster.id} className="relative h-auto max-w-[272px] ">
            <Image
              src={poster.src}
              width={272}
              height={356}
              alt="세로 포스터"
              className="rounded-md blur-[1px] "
            />
            <div className="absolute inset-0 flex items-center justify-center rounded-2xl border border-[#f2b42e] bg-black text-[1vw] text-[#f2b42e] opacity-80">
              <span className="mr-2 font-light">Released at</span>
              <span className="font-medium">2024 · 12</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
