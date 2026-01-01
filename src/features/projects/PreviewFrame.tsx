import { ImageWithSkeleton } from '../../components/ui/ImageWithSkeleton';

export type GalleryItem = {
  src: string;
};

export function PreviewFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="absolute inset-0 overflow-y-auto overscroll-contain [-webkit-overflow-scrolling:touch] custom-scrollbar">
      <div className="min-h-full w-full flex items-start justify-center">
        <ImageWithSkeleton src={src} alt={alt} loading="eager" className="w-full" imgClassName="w-full h-auto object-contain" shimmerClassName="h-full w-full" />
      </div>
    </div>
  );
}
