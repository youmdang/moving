import { BASE_IMAGE_URL } from '@/api/mainpageAPI';
import Image from 'next/image';
import { posterData } from './mock';

export default function genre() {
  return (
    <div className="pt-[76px]">
      <div className="mx-[13vw]">
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
          <ul className="flex flex-wrap gap-[1.4vw]">
            {posterData.map((poster, index) => (
              <li key={index}>
                <div className="w-[7.9vw] truncate">
                  <div className="relative h-[11vw]">
                    <Image
                      src={poster.src}
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
                <div className="w-[7.9vw] truncate">
                  <div className="relative h-[11vw]">
                    <Image
                      src={poster.src}
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
