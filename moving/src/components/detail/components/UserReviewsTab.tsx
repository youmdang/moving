import { movieImage } from '@/lib/utils/movieImage';
import { Review, ReviewResultData } from '@/types/detail/type';
import clsx from 'clsx';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface UserReviewsTabProps {
  reviewData: Review;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

export default function UserReviewsTab({
  reviewData,
  currentPage,
  setCurrentPage,
}: UserReviewsTabProps) {
  const MAX_STAR = 5;
  const TOTAL_PAGE_NUMBER = reviewData.total_results;
  const [pageReviewList, setPageReviewList] = useState<ReviewResultData[]>([]);
  const [sliceNumber, setSliceNumber] = useState(0);
  const [viewPage, setViewPage] = useState(1);

  const movieReviewStar = (() => {
    const results = reviewData.results;
    if (results.length === 0) return 0; // 빈 배열 처리

    const totalRating = results.reduce((sum, item) => {
      const rating = item.author_details?.rating;
      return sum + (rating || 0);
    }, 0);

    const averageRating = totalRating / results.length;
    return (averageRating / 2).toFixed(1);
  })();
  console.log(pageReviewList);
  console.log(sliceNumber);

  const handleNextPage = () => {
    setSliceNumber((prev) => prev + 5);
    setViewPage((prev) => prev + 1);
  };

  const handlePrevPage = () => {
    if (viewPage === 1) {
      setSliceNumber(0);
      setViewPage(1);
    }

    setSliceNumber((prev) => prev - 5);
    setViewPage((prev) => prev - 1);
  };

  const handleViewPage = (view: number) => {
    setSliceNumber(view * 5 - 5);
    setViewPage(view);
  };

  useEffect(() => {
    const newReviewList = reviewData.results.slice(
      sliceNumber,
      sliceNumber + 5
    );
    setPageReviewList(newReviewList);
  }, [viewPage]);

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
          <h3 className="text-3xl font-bold text-[#F29B2E]">
            {movieReviewStar}
          </h3>
          <span className="text-sm font-normal text-[#D9D9D9]">
            {reviewData.total_results} Reviews · Average{' '}
          </span>
          <div className="flex items-center gap-2">
            {Number(movieReviewStar) !== 0
              ? Array.from({ length: MAX_STAR }, (_, index) => {
                  return (
                    <span key={index}>
                      <Image
                        src={
                          index > Number(movieReviewStar) - 1
                            ? 'icons/starOutIcon.svg'
                            : 'icons/starOnIcon.svg'
                        }
                        width={28}
                        height={28}
                        alt="별점 아이콘"
                      />
                    </span>
                  );
                })
              : Array.from({ length: 5 }, (_, index) => {
                  return (
                    <span key={index}>
                      <Image
                        src="icons/starOutIcon.svg"
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

      {reviewData.results.length > 0 ? (
        <>
          <div className="mb-12 flex items-center justify-between">
            <span>리뷰 ({reviewData.total_results})</span>
            <button
              type="button"
              className="flex items-center gap-2 text-sm"
              onClick={() => {}}
            >
              별점 순{' '}
              <Image
                src="/icons/sortIcon.svg"
                width={15}
                height={10}
                alt="정렬 아이콘"
              />
            </button>
          </div>
          {pageReviewList.map((result) => {
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
          <div className="flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={handlePrevPage}
              disabled={viewPage === 1}
            >
              이전
            </button>
            {reviewData.total_pages &&
              Array.from(
                { length: Math.ceil(TOTAL_PAGE_NUMBER / 5) },
                (_, index) => {
                  return (
                    <button
                      type="button"
                      onClick={() => handleViewPage(index + 1)}
                      className={clsx(
                        index + 1 === viewPage ? 'text-blue' : 'text-white'
                      )}
                    >
                      {index + 1}
                    </button>
                  );
                }
              )}
            <button
              type="button"
              onClick={handleNextPage}
              disabled={viewPage === Math.ceil(TOTAL_PAGE_NUMBER / 5)}
            >
              다음
            </button>
          </div>
        </>
      ) : (
        <div className="text-center">작성된 리뷰가 없습니다.</div>
      )}
    </div>
  );
}
