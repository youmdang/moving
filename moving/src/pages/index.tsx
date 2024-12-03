import Image from 'next/image';
import Slide from '@/components/detail/components/Slider';
import LogoGray from '@/images/LogoGray.svg';
import YoutubeIcon from '@/icons/youtubeIcon.svg';
import XIcon from '@/icons/x(sns)Icon.svg';
import TiktokIcon from '@/icons/tiktokIcon.svg';
import InstarIcon from '@/icons/instagramIcon.svg';
import MovingLogo from '@/images/moving-large.png';

export default function Home() {
  return (
    <>
      <section className="">
        <div className="relative h-auto w-full">
          <div
            className="absolute inset-0 
            bg-[rgba(11,11,11,0.9)] bg-gradient-to-t from-[#131518]  to-[rgba(59,63,69,0)]"
          />

          <Image
            src={'/images/landerBanner.png'}
            layout="responsive"
            width={1920}
            height={840}
            alt="메인 베너"
          />
          <div className="text-[#f3f3f3]] absolute left-[50%] top-[50%] w-[625px] translate-x-[-50%] translate-y-[-50%] text-center">
            <h1 className="text-[#f3f3f3]] flex flex-col gap-2  whitespace-nowrap">
              <span className="text-5xl font-bold leading-[72px]">
                인기 상영작부터<br></br> 곧 개봉하는 따끈한 신작들까지!<br></br>
                무제한으로 스트리밍 해보세요.
              </span>
            </h1>
            <button className="mt-8 h-[63px] w-[356px] rounded-xl bg-[#2D73F3] text-xl font-bold">
              지금 시청하기
            </button>
          </div>
        </div>
        <div className="w-full">
          <div className="m-auto mt-[152px] w-[1400px] text-[#d9d9d9]">
            <h3 className="mt-[72px] text-[40px] font-semibold leading-[64px]">
              매달 새롭게 추가되는 MOVING 콘텐츠를<br></br> 언제나 광고 없이.
            </h3>
            <h3 className="mt-[72px] text-[40px] font-semibold leading-[64px]">
              몰입감 넘치는 공간 음향으로 감상하는 4K HDR 영상<br></br> 하나의
              멤버십으로 최대 5명과 함께.
            </h3>
            <h3 className="mt-[72px] text-[40px] font-semibold leading-[64px]">
              스마트 기기, 스마트 TV, 게임 콘솔 또는 스틱 등을 통해<br></br>
              MOVING 앱에서 스트리밍 가능.
            </h3>

            <div className="m-auto mt-[72px] flex justify-between">
              {[
                {
                  title: 'BASIC',
                  price: '5,500',
                  priceColor: 'text-gray-100',
                  cardColor: '#2D73F3',
                  quality: '좋음',
                  resolution: '1080p (풀HD)',
                  devices: 'TV, 컴퓨터, 스마트폰, 태블릿',
                  deviceCount: '2',
                  ads: '적은 광고',
                },
                {
                  title: 'STANDARD',
                  price: '7,500',
                  priceColor: 'text-blue-400',
                  cardColor: '#2D73F3',
                  quality: '매우 좋음',
                  resolution: '1080p (풀HD)',
                  devices: 'TV, 컴퓨터, 스마트폰, 태블릿',
                  deviceCount: '2',
                  ads: '광고 없음',
                },
                {
                  title: 'PREMIUM',
                  price: '12,500',
                  priceColor: 'text-yellow-400',
                  cardColor: '#2D73F3',
                  quality: '매우 좋음',
                  resolution: '4K(UHD) + HDR',
                  devices: 'TV, 컴퓨터, 스마트폰, 태블릿',
                  deviceCount: '4',
                  ads: '광고 없음',
                },
              ].map((plan, index) => (
                <div
                  key={index}
                  className={`border-gray-600 h-[403px] w-[372px] border p-8 ${plan.cardColor} rounded-lg shadow-md`}
                >
                  <h2 className="text-2xl font-bold">{plan.title}</h2>
                  <p
                    className={`text-4xl font-semibold ${plan.priceColor} mt-2`}
                  >
                    {plan.price}
                    <span className="ml-2 text-base font-bold">원 / 월</span>
                  </p>
                  <ul className="text-gray-300 mt-4 space-y-2 text-sm">
                    <li className="flex justify-start">
                      <div className="w-[92px] pr-4">화질과 음질 </div>
                      <span className="text-base font-semibold">
                        {plan.quality}
                      </span>
                    </li>
                    <li className="flex justify-start">
                      <div className="w-[92px] pr-4">해상도</div>
                      <span className="text-base font-semibold">
                        {plan.resolution}
                      </span>
                    </li>
                    <li className="flex justify-start">
                      <div className="w-[92px] pr-4">디바이스</div>
                      <span className="text-base font-semibold">
                        {plan.devices}
                      </span>
                    </li>
                    <li className="flex justify-start">
                      <div className="w-[92px] pr-4">기기 수 </div>
                      <span className="text-base font-semibold">
                        {plan.deviceCount}
                      </span>
                    </li>
                    <li className="flex justify-start">
                      <div className="w-[92px] pr-4">광고 </div>
                      <span className="text-base font-semibold">
                        {plan.ads}
                      </span>
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="relative m-auto mt-[156px] w-[1400px]">
            <h3 className="mb-4 text-center text-[40px] font-semibold  text-white">
              영화를 가장 빠르게
            </h3>
            <p className=" mb-11 text-center text-[24px] font-medium text-white">
              오직 무빙에서만
              <br /> 개봉 영화를 감상해 보세요.
            </p>

            <div className="relative flex items-center justify-center">
              {/* 왼쪽 이미지 */}
              <div className="absolute left-0 z-0 h-[400px] w-[600px] translate-x-[0%] translate-y-[13%] opacity-70">
                <Image
                  src="/images/movie1.png"
                  layout="fill"
                  objectFit="cover"
                  alt="Left Movie"
                  className="rounded-lg shadow-lg"
                />
              </div>
              {/* 가운데 이미지 */}
              <div className="relative z-10 h-[506px] w-[789px]">
                <Image
                  src="/images/movie2.png"
                  layout="fill"
                  objectFit="cover"
                  alt="Center Movie"
                  className="rounded-lg shadow-xl transition-transform duration-300"
                />
              </div>
              {/* 오른쪽 이미지 */}
              <div className="absolute right-0 z-0 h-[400px] w-[600px] translate-x-[0%] translate-y-[13%] opacity-70">
                <Image
                  src="/images/movie3.png"
                  layout="fill"
                  objectFit="cover"
                  alt="Right Movie"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>

          <Slide></Slide>
          <div className="m-auto my-[300px]  flex flex-col items-center">
            <div>
              <Image
                src={'/images/moving-large.png'}
                layout=""
                width={282}
                height={64}
                alt="메인 베너"
              />
            </div>
            <div>
              <h3 className="text-[40px] font-semibold text-[#d9d9d9]">
                지금 시작해보세요.
              </h3>
            </div>
            <div>
              <button className="mt-8 h-[63px] w-[356px] rounded-xl bg-[#2D73F3] text-xl font-bold">
                지금 시청하기
              </button>
            </div>
          </div>
        </div>
      </section>
      <footer className="mt-[108px] opacity-60">
        <hr className="border-[#1E1E1E]" />
        <div className="mx-[160px] my-5 flex gap-4 text-base text-[#dfdfdf]  ">
          <span>회사 소개</span>
          <span>서비스 소개</span>
          <span>이용약관</span>
          <span>개인정보 처리방침</span>
          <span>고객센터</span>
          <span>이벤트</span>
        </div>
        <hr className="border-[#1E1E1E]" />
        <div className="mx-[160px] mt-10">
          <div className="mb-[30px] flex justify-between">
            <LogoGray />
            <div className="flex gap-4">
              <YoutubeIcon />
              <InstarIcon />
              <TiktokIcon />
              <XIcon />
            </div>
          </div>

          <div className="mb-[60px] text-[#3e4248]">
            <p>
              무빙 주식회사대표이사 이태현고객센터 1599-3709 (평일 09:00~18:00 /
              점심시간 12:00~13:00 / 주말 및 공휴일 휴무)
            </p>
            <p>
              인천광역시 미추홀구 용현 5동 전자우편주소 : mangoj425@Gmail.c om
            </p>
            <p>Copyright© 컨텐츠무빙(주) All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
