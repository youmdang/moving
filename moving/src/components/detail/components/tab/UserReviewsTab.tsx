import { useModalStore } from '@/lib/store/modalStore';
import { movieImage } from '@/lib/utils/movieImage';
import { Review, ReviewResultData } from '@/types/detail/type';
import clsx from 'clsx';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import ReviewDropDown from './ReviewDropDown';
import { reviewTimeAgo } from '@/lib/utils/reviewTimeAgo';
import { movieReviewStar } from '@/lib/utils/movieReviewStar';
import { useModalSort } from '@/lib/hook/useModalSort';

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
  const { sortText, setSortText, sortedReviews } = useModalSort(
    reviewData.results
  );
  const [pageReviewList, setPageReviewList] = useState<ReviewResultData[]>([]);
  const [sliceNumber, setSliceNumber] = useState(0);
  const [viewPage, setViewPage] = useState(1);
  const { setScrollTop } = useModalStore();
  const reviewStarResult = movieReviewStar(reviewData);
  console.log(sortedReviews);

  const handleNextPage = () => {
    if (viewPage === reviewData.total_results) {
      setSliceNumber((prev) => prev);
      setViewPage((prev) => prev);
    }
    setSliceNumber((prev) => prev + 5);
    setViewPage((prev) => prev + 1);
    setScrollTop();
  };

  const handlePrevPage = () => {
    if (viewPage === 1) {
      setSliceNumber(0);
      setViewPage(1);
    }

    setSliceNumber((prev) => prev - 5);
    setViewPage((prev) => prev - 1);
    setScrollTop();
  };

  const handleViewPage = (view: number) => {
    setSliceNumber(view * 5 - 5);
    setViewPage(view);
    setScrollTop();
  };

  useEffect(() => {
    const newReviewList = sortedReviews.slice(sliceNumber, sliceNumber + 5);
    setPageReviewList(newReviewList);
  }, [sliceNumber, sortText, sortedReviews]);

  return (
    <div className="px-5 pb-10 text-white lg:px-20">
      <div className="mb-12 flex items-center justify-center gap-6">
        <Image
          src="/images/reviewBgLeft.png"
          width={58}
          height={129}
          alt="리뷰 배경 이미지"
        />
        <div className="flex flex-col items-center gap-3">
          <h3 className="text-3xl font-bold text-[#F29B2E]">
            {reviewStarResult}
          </h3>
          <span className="text-sm font-normal text-[#D9D9D9]">
            {reviewData.total_results} Reviews · Average{' '}
          </span>
          <div className="flex items-center gap-2">
            {Number(reviewStarResult) !== 0
              ? Array.from({ length: MAX_STAR }, (_, index) => {
                  return (
                    <span key={index}>
                      <Image
                        src={
                          index > Number(reviewStarResult) - 1
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
            <ReviewDropDown sortText={sortText} setSortText={setSortText} />
          </div>
          {pageReviewList.map((result) => {
            const profileImage = movieImage(result.author_details.avatar_path);
            const reviewStar = Math.floor(result.author_details.rating / 2);
            const ageText = reviewTimeAgo(result.created_at);
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
                              width={20}
                              height={20}
                              alt="별점 아이콘"
                            />
                          </span>
                        );
                      })}
                      <span className="ml-2 block pt-1 text-sm font-semibold">
                        {result.author_details.rating / 2}
                      </span>
                    </div>
                    <span className="text-xs font-normal text-[#77777777]">
                      {ageText}
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
                      key={index}
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
