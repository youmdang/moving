import clsx from 'clsx';

interface TrailerTabProps {
  trailerKey: string | undefined;
}

export default function TrailerTab({ trailerKey }: TrailerTabProps) {
  return (
    <div
      className={clsx(
        'flex w-full items-center justify-center px-20 pb-10 text-white',
        trailerKey ? 'h-[500px]' : 'h-[300px]'
      )}
    >
      {trailerKey ? (
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1`}
          title="예고편"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <p>제공되는 예고편이 없습니다.</p>
      )}
    </div>
  );
}
