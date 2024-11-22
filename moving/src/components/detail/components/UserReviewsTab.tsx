import Image from 'next/image';
import { useState } from 'react';

export default function UserReviewsTab() {
  const REVIEW_STAR_LIST = [1, 2, 3, 4, 5];
  const [isStar, setIsStar] = useState<boolean>(true);
  return (
    <div className="px-20 pb-10 text-white">
      <div className="mb-12 flex items-center justify-center gap-6">
        <Image
          src="/images/reviewBgLeft.png"
          width={58}
          height={129}
          alt="리뷰 배경 이미지"
        />
        <div className="flex flex-col items-center gap-3">
          <h3 className="text-3xl font-bold text-[#F29B2E]">9.5</h3>
          <span className="text-sm font-normal text-[#D9D9D9]">
            28 Reviews · Average{' '}
          </span>
          <div className="flex items-center gap-2">
            {REVIEW_STAR_LIST.map((star) => {
              return (
                <button key={star} type="button">
                  <Image
                    src={
                      isStar ? 'icons/starOnIcon.svg' : 'icons/starOutIcon.svg'
                    }
                    width={28}
                    height={28}
                    alt="별점 아이콘"
                  />
                </button>
              );
            })}
          </div>
        </div>
        <Image
          src="/images/reviewBgRight.png"
          width={58}
          height={129}
          alt="리뷰 배경 이미지"
        />
      </div>

      <div className="mb-12 flex items-center justify-between">
        <span>리뷰 (28)</span>
        <button type="button">좋아요 순</button>
      </div>

      <div className="mb-10 border-b-2 border-[#2D313A] pb-10">
        <div className="mb-4 flex justify-between">
          <div>
            <div className="mb-3 flex items-center gap-2 text-sm font-normal">
              <Image
                src="/images/testImage.png"
                width={33}
                height={33}
                alt="프로필 이미지"
              />
              영화 보는사람
            </div>
            <div className="mb-3 flex items-center gap-1">
              {REVIEW_STAR_LIST.map((star) => {
                return (
                  <button key={star} type="button">
                    <Image
                      src={
                        isStar
                          ? 'icons/starOnIcon.svg'
                          : 'icons/starOutIcon.svg'
                      }
                      width={16}
                      height={16}
                      alt="별점 아이콘"
                    />
                  </button>
                );
              })}
            </div>
            <span className="text-xs font-normal text-[#77777777]">
              1개월 전
            </span>
          </div>
          <div>
            <button type="button" className="flex items-center gap-1">
              <Image
                src="/icons/likeIcon.svg"
                width={14}
                height={12}
                alt="좋아요 아이콘"
              />
              좋아요
            </button>
          </div>
        </div>
        <p className="text-base font-normal">
          elit, sed do eiusmod tempor incididunt ut l. et dolore magna aliqua.
          Ut enim ad minim ve..et dolore magna aliqua. Ut enim ad minim ve....
        </p>
      </div>

      <div className="mb-10 border-b-2 border-[#2D313A] pb-10">
        <div className="mb-4 flex justify-between">
          <div>
            <div className="mb-3 flex items-center gap-2 text-sm font-normal">
              <Image
                src="/images/testImage.png"
                width={33}
                height={33}
                alt="프로필 이미지"
              />
              영화 보는사람
            </div>
            <div className="mb-3 flex items-center gap-1">
              {REVIEW_STAR_LIST.map((star) => {
                return (
                  <button key={star} type="button">
                    <Image
                      src={
                        isStar
                          ? 'icons/starOnIcon.svg'
                          : 'icons/starOutIcon.svg'
                      }
                      width={16}
                      height={16}
                      alt="별점 아이콘"
                    />
                  </button>
                );
              })}
            </div>
            <span className="text-xs font-normal text-[#77777777]">
              1개월 전
            </span>
          </div>
          <div>
            <button type="button" className="flex items-center gap-1">
              <Image
                src="/icons/likeIcon.svg"
                width={14}
                height={12}
                alt="좋아요 아이콘"
              />
              좋아요
            </button>
          </div>
        </div>
        <p className="text-base font-normal">
          elit, sed do eiusmod tempor incididunt ut l. et dolore magna aliqua.
          Ut enim ad minim ve..et dolore magna aliqua. Ut enim ad minim ve....
        </p>
      </div>
    </div>
  );
}
