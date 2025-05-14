
import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Button } from '@/components/ui/button';

export interface GalleryImage {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface ImageGalleryProps {
  images: GalleryImage[];
  className?: string;
  columns?: 1 | 2 | 3 | 4;
  aspectRatio?: number;
  gap?: 'none' | 'sm' | 'md' | 'lg';
  lightboxTitle?: string;
  lightboxDescription?: string;
  enableLightbox?: boolean;
}

const ImageGallery = ({
  images,
  className,
  columns = 3,
  aspectRatio = 4/3,
  gap = 'md',
  lightboxTitle,
  lightboxDescription,
  enableLightbox = true,
}: ImageGalleryProps) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<number>(0);

  const handleOpenLightbox = (index: number) => {
    if (enableLightbox) {
      setCurrentImage(index);
      setLightboxOpen(true);
    }
  };

  const handleCloseLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  // Gap classes
  const gapClasses = {
    none: 'gap-0',
    sm: 'gap-2',
    md: 'gap-4',
    lg: 'gap-6',
  };

  // Column classes
  const columnClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <>
      <div className={cn(
        'grid',
        columnClasses[columns],
        gapClasses[gap],
        className
      )}>
        {images.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-md hover-scale cursor-pointer"
            onClick={() => handleOpenLightbox(index)}
          >
            <AspectRatio ratio={aspectRatio}>
              <img
                src={image.src}
                alt={image.alt}
                className="object-cover w-full h-full transition-all duration-300"
                loading="lazy"
                width={image.width}
                height={image.height}
              />
            </AspectRatio>
          </div>
        ))}
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={lightboxOpen} onOpenChange={handleCloseLightbox}>
        <DialogContent className="max-w-5xl p-0 bg-background/80 backdrop-blur-sm">
          <DialogHeader className="absolute top-0 left-0 right-0 z-10 p-4 bg-gradient-to-b from-black/60 to-transparent text-white">
            {lightboxTitle && <DialogTitle>{lightboxTitle}</DialogTitle>}
            {lightboxDescription && <DialogDescription className="text-gray-200">{lightboxDescription}</DialogDescription>}
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-4 rounded-full bg-black/20 text-white hover:bg-black/40"
              onClick={handleCloseLightbox}
            >
              <X className="h-4 w-4" />
            </Button>
          </DialogHeader>
          
          <div className="relative">
            <div className="flex items-center justify-center min-h-[300px] md:min-h-[500px]">
              <img 
                src={images[currentImage]?.src} 
                alt={images[currentImage]?.alt} 
                className="max-h-[80vh] object-contain"
              />
            </div>
            
            {images.length > 1 && (
              <>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 rounded-full bg-black/20 text-white hover:bg-black/40"
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full bg-black/20 text-white hover:bg-black/40"
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </>
            )}
            
            {/* Image indicator dots */}
            {images.length > 1 && (
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentImage ? 'bg-white scale-125' : 'bg-white/50'
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImage(index);
                    }}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ImageGallery;
