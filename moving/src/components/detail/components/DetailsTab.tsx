import Image from 'next/image';

export default function DetailsTab() {
  return (
    <div className="px-20 pb-10 text-white">
      <div className="mb-10 border-b-[1px] border-[#2D313A] pb-10">
        <h2 className="text-2xl font-semibold">
          스파이더맨: 어크로스 더 유니버스
        </h2>
        <span className="mb-2 mt-4 block text-base font-medium">시놉시스</span>
        <p className="text-sm font-normal">
          여러 성장통을 겪으며 새로운 스파이더맨이 된 마일스 모랄레스. 그 앞에
          다른 평행세계의 스파이더우먼 그웬이 다시 나타난다. 모든 차원의
          멀티버스 속 스파이더맨들을 만나게 되지만, 질서에 대한 신념이 부딪히며
          예상치 못한 균열이 생기는데… 상상 그 이상을 넘어서는 멀티버스의 세계가
          열린다!
        </p>
      </div>
      <div className="mb-10 border-b-[1px] border-[#2D313A] pb-10">
        <h2 className="mb-4 text-base font-medium">출연진</h2>
        <ul className="flex gap-6">
          <li className="flex flex-col items-center justify-center">
            <Image
              src="/images/testImage.png"
              width={80}
              height={80}
              alt="출연진 이미지"
            />
            <span className="mb-1 mt-2 block text-xs">한글 이름</span>
            <span className="text-xs">영어 이름</span>
          </li>
          <li className="flex flex-col items-center justify-center">
            <Image
              src="/images/testImage.png"
              width={80}
              height={80}
              alt="출연진 이미지"
            />
            <span className="mb-1 mt-2 block text-xs">한글 이름</span>
            <span className="text-xs">영어 이름</span>
          </li>
          <li className="flex flex-col items-center justify-center">
            <Image
              src="/images/testImage.png"
              width={80}
              height={80}
              alt="출연진 이미지"
            />
            <span className="mb-1 mt-2 block text-xs">한글 이름</span>
            <span className="text-xs">영어 이름</span>
          </li>
          <li className="flex flex-col items-center justify-center">
            <Image
              src="/images/testImage.png"
              width={80}
              height={80}
              alt="출연진 이미지"
            />
            <span className="mb-1 mt-2 block text-xs">한글 이름</span>
            <span className="text-xs">영어 이름</span>
          </li>
        </ul>
      </div>
      <div className="mb-10 flex gap-5 pb-10">
        <div className="mb-2 flex-shrink-0">
          <Image
            src="/images/seriesTestImage.png"
            width={130}
            height={178}
            alt="포스터 이미지"
          />
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-base font-bold">
            “한 명을 구할 것인가, 모두를 구할 것인가”
          </h3>
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold">개요</span>
            <span className="text-sm font-normal">2024 · 11</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold">장르</span>
            <span className="text-sm font-normal">애니메이션, 액션</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold">감독</span>
            <span className="text-sm font-normal">저스틴 톰슨</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold">등급</span>
            <span className="text-sm font-normal">All</span>
          </div>
        </div>
      </div>
    </div>
  );
}
