import { movieImage } from '@/lib/utils/movieImage';
import { Review } from '@/types/detail/type';
import Image from 'next/image';
import { useState } from 'react';

interface UserReviewsTabProps {
  reviewData: Review;
  movieDataVote: number;
}

export default function UserReviewsTab({
  reviewData,
  movieDataVote,
}: UserReviewsTabProps) {
  const MAX_STAR = 5;
  const MOVIE_STAR = Math.floor(movieDataVote / 2);
  const reviewAverage = Number(movieDataVote.toFixed(1));

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
          <h3 className="text-3xl font-bold text-[#F29B2E]">{reviewAverage}</h3>
          <span className="text-sm font-normal text-[#D9D9D9]">
            {reviewData.total_results} Reviews · Average{' '}
          </span>
          <div className="flex items-center gap-2">
            {Array.from({ length: MAX_STAR }, (_, index) => {
              return (
                <span key={index}>
                  <Image
                    src={
                      index > MOVIE_STAR - 1
                        ? 'icons/starOutIcon.svg'
                        : 'icons/starOnIcon.svg'
                    }
                    width={28}
                    height={28}
                    alt="별점 아이콘"
                  />
                </span>
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
        <span>리뷰 ({reviewData.total_results})</span>
      </div>

      {reviewData.results.map((result) => {
        const profileImage = movieImage(result.author_details.avatar_path);
        const reviewStar = Math.floor(result.author_details.rating / 2);
        return (
          <div
            key={result.id}
            className="mb-10 border-b-2 border-[#2D313A] pb-10"
          >
            <div className="mb-4 flex justify-between">
              <div>
                <div className="mb-3 flex items-center gap-2 text-sm font-normal">
                  <Image
                    src={profileImage}
                    width={33}
                    height={33}
                    className="h-[33px] w-[33px] rounded-full"
                    alt="프로필 이미지"
                  />
                  {result.author_details.username}
                </div>
                <div className="mb-3 flex items-center gap-1">
                  {Array.from({ length: MAX_STAR }, (_, index) => {
                    return (
                      <span key={index}>
                        <Image
                          src={
                            index > reviewStar - 1
                              ? 'icons/starOutIcon.svg'
                              : 'icons/starOnIcon.svg'
                          }
                          width={28}
                          height={28}
                          alt="별점 아이콘"
                        />
                      </span>
                    );
                  })}
                </div>
                <span className="text-xs font-normal text-[#77777777]">
                  1개월 전
                </span>
              </div>
            </div>
            <p className="text-base font-normal">{result.content}</p>
          </div>
        );
      })}
    </div>
  );
}
