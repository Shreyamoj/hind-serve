
import React, { useState } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface ImageGalleryProps {
  images: string[];
  className?: string;
  aspectRatio?: number;
  columns?: 1 | 2 | 3 | 4;
  gap?: 'none' | 'sm' | 'md' | 'lg';
}

const ImageGallery = ({ 
  images, 
  className,
  aspectRatio = 16 / 9,
  columns = 3,
  gap = 'md',
}: ImageGalleryProps) => {
  const [currentImage, setCurrentImage] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleNext = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const gapClasses = {
    none: "gap-0",
    sm: "gap-2",
    md: "gap-4",
    lg: "gap-6",
  };

  const columnClasses = {
    1: "grid-cols-1",
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
  };

  const handleDialogChange = (open: boolean) => {
    setIsOpen(open);
  };

  return (
    <div className={cn("w-full", className)}>
      <div className={cn("grid", columnClasses[columns], gapClasses[gap])}>
        {images.map((image, index) => (
          <Dialog key={index} open={isOpen && currentImage === index} onOpenChange={handleDialogChange}>
            <DialogTrigger asChild>
              <div 
                className="overflow-hidden rounded-md border cursor-pointer transition-all hover:opacity-90 hover:shadow-md"
                onClick={() => setCurrentImage(index)}
              >
                <AspectRatio ratio={aspectRatio} className="bg-hindserve-gray-100">
                  <img 
                    src={image} 
                    alt={`Gallery image ${index + 1}`} 
                    className="h-full w-full object-cover transition-all animate-fade-in"
                    loading="lazy"
                  />
                </AspectRatio>
              </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-3xl p-0 bg-black/90 border-hindserve-gray-800">
              <div className="relative w-full h-full">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="absolute top-2 right-2 rounded-full bg-black/50 text-white z-50 hover:bg-black/70"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
                
                <div className="flex items-center justify-center h-full p-4">
                  <img 
                    src={images[currentImage]} 
                    alt={`Gallery fullscreen image ${currentImage + 1}`}
                    className="max-h-[80vh] max-w-full object-contain animate-fade-in"
                  />
                </div>
                
                <div className="absolute inset-y-0 left-0 flex items-center">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-10 w-10 rounded-full bg-black/50 text-white hover:bg-black/70 ml-2"
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePrev();
                    }}
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </Button>
                </div>
                
                <div className="absolute inset-y-0 right-0 flex items-center">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-10 w-10 rounded-full bg-black/50 text-white hover:bg-black/70 mr-2"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNext();
                    }}
                  >
                    <ChevronRight className="h-6 w-6" />
                  </Button>
                </div>
                
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                  {images.map((_, idx) => (
                    <Button 
                      key={idx}
                      variant="ghost" 
                      size="icon"
                      className={cn(
                        "w-2 h-2 rounded-full p-0 min-w-0 bg-white/30",
                        currentImage === idx && "bg-white"
                      )}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentImage(idx);
                      }}
                    />
                  ))}
                </div>
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
