import Logo from '@/images/Logo.svg';
import Star from '@/icons/starIcon.svg';
import Favorite from '@/icons/FavoriteIcon.svg';
import { useState } from 'react';
import { match } from 'ts-pattern';
import SeriesTab from './components/SeriesTab';
import RelatedWorksTab from './components/RelatedWorksTab';
import UserReviewsTab from './components/UserReviewsTab';
import DetailsTab from './components/DetailsTab';

export default function DetailModal() {
  const reviewFavoriteClass = 'flex items-center gap-2 text-xs text-white';
  const STATE_LIST = ['시즈 3개', '15세', '가족영화', '히어로']; // 데이터 연동작업후 삭제
  const MOVIE_TAB_LIST = ['시리즈', '연관작품', '사용자 평', '상세정보'];
  const [tabIsActive, setTabIsActive] = useState(0);
  return (
    <div className="mx-auto w-full max-w-[1080px] bg-black">
      <div
        className="animate-zoomBg mb-20 bg-center bg-no-repeat px-20 pt-7"
        style={{
          backgroundImage:
            "linear-gradient(to top, rgba(0, 0, 0, 0.9) 10%, rgba(0, 0, 0, 0.4) 100%), url('/images/modalTestImage.png')",
        }}
      >
        <h2 className="mb-52">
          <Logo />
        </h2>
        <div>
          <div className="mb-4 flex items-center gap-6">
            <span className={`${reviewFavoriteClass} font-semibold`}>
              <Star />
              8.1
            </span>
            <button className={`${reviewFavoriteClass} font-normal`}>
              <Favorite />
              관심
            </button>
          </div>
          <h3 className="flex items-end gap-4 text-5xl font-semibold text-white">
            스파이더맨: 어크로스 더 유니버스{' '}
            <span className="text-3xl font-normal text-[#D9D9D9]">(2023)</span>
          </h3>
          <ul className="flex items-center gap-2">
            {STATE_LIST.map((state, index) => {
              return (
                <li
                  key={index}
                  className="mb-6 mt-4 flex h-7 items-center justify-center rounded-xl border-[1px] border-white bg-[rgba(43,45,49,0.8)] px-4 text-xs font-normal text-white"
                >
                  {state}
                </li>
              );
            })}
          </ul>
          <div className="flex justify-between gap-6">
            <p className="basis-[70%] text-sm font-normal text-white">
              여러 성장통을 겪으며 새로운 스파이더맨이 된 마일스 모랄레스. 그
              앞에 다른 평행세계의 스파이더 우먼 그웬이 다시 나타난다. 모든
              차원의 멀티버스 속 스파이더맨들을 만나게 되지만, 질서에 대한...
            </p>
            <button
              type="button"
              className="h-12 max-w-64 basis-[30%] rounded-xl bg-[#2D73F3] text-xl font-semibold text-white"
            >
              시청하기
            </button>
          </div>
        </div>
      </div>
      <div className="px-20">
        <div className="mb-12 flex w-full items-center gap-4 border-b-2 border-white pb-4">
          {MOVIE_TAB_LIST.map((tab, index) => {
            const isActive =
              index === tabIsActive
                ? 'modal-tab-active text-[#2D73F3]'
                : 'text-white';
            return (
              <button
                key={index}
                type="button"
                onClick={() => {
                  setTabIsActive(index);
                }}
                className={`relative px-4 text-base font-bold ${isActive}`}
              >
                {tab} {index === 2 && '28+'}
              </button>
            );
          })}
        </div>
      </div>

      {match(tabIsActive)
        .with(0, () => {
          return <SeriesTab />;
        })
        .with(1, () => {
          return <RelatedWorksTab />;
        })
        .with(2, () => {
          return <UserReviewsTab />;
        })
        .with(3, () => {
          return <DetailsTab />;
        })
        .otherwise(() => {
          return <SeriesTab />;
        })}
    </div>
  );
}
