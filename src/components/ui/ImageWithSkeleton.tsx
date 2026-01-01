import { useEffect, useState } from 'react';
import { cn } from '../../lib/cn';
import { Shimmer } from './Shimmer';

type Props = {
  src?: string | null;
  alt: string;
  className?: string;
  imgClassName?: string;
  shimmerClassName?: string;
  loading?: 'lazy' | 'eager';
};

export function ImageWithSkeleton({ src, alt, className, imgClassName, shimmerClassName, loading = 'lazy' }: Props) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false);
  }, [src]);

  if (!src) return null;

  return (
    <div className={cn('relative', className)}>
      {!loaded ? (
        <div className="absolute inset-0">
          <Shimmer className={shimmerClassName} />
        </div>
      ) : null}

      <img src={src} alt={alt} loading={loading} decoding="async" onLoad={() => setLoaded(true)} className={cn('h-full w-full', loaded ? 'opacity-100' : 'opacity-0', 'transition-opacity duration-200', imgClassName)} draggable={false} />
    </div>
  );
}
