import { posterData } from '@/pages/search/mock';
import Image from 'next/image';
export default function RelatedWorks() {
  return (
    <section className="mb-[143px]">
      <h2 className="mb-4">
        <span className="text-base font-bold">연관작품</span>
        <span className="ml-2 rounded-lg border-[1px] border-[#f2b42e] px-2 py-[3px] text-xs">
          6+
        </span>
      </h2>
      <hr className="mb-9 border-[1px] text-[#f3f3f3]" />
      <ul className="flex flex-wrap gap-[1.4vw]">
        {posterData.map((poster, index) => (
          <li key={index}>
            <div className="relative h-[11vw] w-[7.9vw]">
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
  );
}
