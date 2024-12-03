import { useModal } from '@/lib/hook/useModal';
import { useModalAnimateStore } from '@/lib/store/modalAnimateStore';
import { useModalStore } from '@/lib/store/modalStore';
import { movieImage } from '@/lib/utils/movieImage';
import { RelatedWork } from '@/types/detail/type';
import Image from 'next/image';

interface RelatedWorksTabProps {
  recommendationData: RelatedWork;
  setTabIsActive: React.Dispatch<React.SetStateAction<number>>;
}

export default function RelatedWorksTab({
  recommendationData,
  setTabIsActive,
}: RelatedWorksTabProps) {
  const { setScrollTop } = useModalStore();
  const { handleModalChange } = useModal();
  const { resetModalAnimate } = useModalAnimateStore();

  return (
    <div className="grid grid-cols-[repeat(6,1fr)] gap-x-6 gap-y-9 px-20 pb-10 text-white">
      {recommendationData.results.map((result) => {
        const image = movieImage(result.poster_path);
        return (
          <div key={result.id} className="flex flex-col">
            <div
              className="mb-2 flex-shrink-0 cursor-pointer"
              onClick={() => {
                handleModalChange(result.id);
                resetModalAnimate();
                setTabIsActive(0);
                setScrollTop();
              }}
            >
              <Image src={image} width={130} height={178} alt="포스터 이미지" />
            </div>
            <h4 className="line-clamp-1 text-base font-semibold text-white">
              {result.title}
            </h4>
          </div>
        );
      })}
    </div>
  );
}
