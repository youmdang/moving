import { useEffect, useRef } from 'react';

const images = [
  '/images/movie1.png',
  '/images/movie2.png',
  '/images/movie3.png',
  '/images/movie1.png',
  '/images/movie2.png',
  '/images/movie3.png',
  '/images/movie1.png',
  '/images/movie2.png',
  '/images/movie3.png',
  '/images/movie1.png',
  '/images/movie2.png',
];

const DualDirectionSlider = () => {
  const leftToRightRef = useRef<HTMLDivElement>(null);
  const rightToLeftRef = useRef<HTMLDivElement>(null);

  const startSlider = (
    slider: HTMLDivElement | null,
    direction: 'left' | 'right'
  ) => {
    if (!slider) return;

    let start = direction === 'right' ? -slider.scrollWidth / 2 : 0; // 초기 시작 위치
    const speed = 0.3; // 슬라이더 속도 조절 (값이 작을수록 느림)

    const moveSlider = () => {
      if (direction === 'left') {
        start -= speed;
        if (start <= -slider.scrollWidth / 2) {
          start = 0; // 절반만큼 이동하면 초기화
        }
      } else if (direction === 'right') {
        start += speed;
        if (start >= 0) {
          start = -slider.scrollWidth / 2; // 오른쪽에서 왼쪽으로 이동한 만큼 초기화
        }
      }
      slider.style.transform = `translateX(${start}px)`;
      requestAnimationFrame(moveSlider); // 계속 호출
    };

    requestAnimationFrame(moveSlider);
  };

  useEffect(() => {
    const leftSlider = leftToRightRef.current;
    const rightSlider = rightToLeftRef.current;

    startSlider(leftSlider, 'right'); // 왼쪽 -> 오른쪽
    startSlider(rightSlider, 'left'); // 오른쪽 -> 왼쪽
  }, []);

  return (
    <div className="relative mt-[156px] overflow-hidden ">
      <h3 className="mb-4 text-center text-[40px] font-semibold text-white">
        무빙에서 뜨는 인기 영화들
      </h3>
      <p className="mb-11 text-center text-[24px] font-medium text-white">
        해외, 국내, 인기, 최신 영화
      </p>
      {/* 오른쪽 -> 왼쪽 슬라이더 */}
      <div className="relative overflow-hidden">
        <div
          ref={rightToLeftRef}
          className="flex w-[calc(375px*11*2)] space-x-4"
          style={{
            display: 'flex',
            willChange: 'transform',
          }}
        >
          {images.map((src, index) => (
            <img
              key={`rightToLeft-${index}`}
              src={src}
              alt={`Slide ${index}`}
              className="h-[215px] w-[375px] flex-shrink-0"
            />
          ))}
          {images.map((src, index) => (
            <img
              key={`rightToLeft-clone-${index}`}
              src={src}
              alt={`Slide Clone ${index}`}
              className="h-[215px] w-[375px] flex-shrink-0"
            />
          ))}
        </div>
      </div>

      {/* 왼쪽 -> 오른쪽 슬라이더 */}
      <div className="relative mt-4 overflow-hidden">
        <div
          ref={leftToRightRef}
          className="flex w-[calc(375px*11*2)] space-x-4"
          style={{
            display: 'flex',
            willChange: 'transform',
          }}
        >
          {images.map((src, index) => (
            <img
              key={`leftToRight-${index}`}
              src={src}
              alt={`Slide ${index}`}
              className="h-[215px] w-[375px] flex-shrink-0"
            />
          ))}
          {images.map((src, index) => (
            <img
              key={`leftToRight-clone-${index}`}
              src={src}
              alt={`Slide Clone ${index}`}
              className="h-[215px] w-[375px] flex-shrink-0"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DualDirectionSlider;
