
import { useState } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface ImageGalleryProps {
  images: string[];
  columns?: 2 | 3 | 4;
  aspectRatio?: "square" | "video" | "wide";
  gap?: "small" | "medium" | "large";
}

const ImageGallery = ({ 
  images, 
  columns = 3, 
  aspectRatio = "square",
  gap = "medium" 
}: ImageGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  
  const gapClass = {
    small: "gap-1",
    medium: "gap-3",
    large: "gap-6"
  };
  
  const columnsClass = {
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
  };

  const ratio = {
    square: 1 / 1,
    video: 16 / 9,
    wide: 21 / 9
  };
  
  const nextImage = () => {
    if (selectedImage === null) return;
    setSelectedImage((selectedImage + 1) % images.length);
  };
  
  const prevImage = () => {
    if (selectedImage === null) return;
    setSelectedImage((selectedImage - 1 + images.length) % images.length);
  };

  return (
    <>
      <div className={`grid ${columnsClass[columns]} ${gapClass[gap]} animate-fade-in`}>
        {images.map((image, index) => (
          <div 
            key={index} 
            className="rounded-lg overflow-hidden cursor-pointer shadow-sm hover-scale"
            onClick={() => setSelectedImage(index)}
          >
            <AspectRatio ratio={ratio[aspectRatio]}>
              <img 
                src={image} 
                alt={`Gallery image ${index + 1}`} 
                className="object-cover w-full h-full"
                loading="lazy"
              />
            </AspectRatio>
          </div>
        ))}
      </div>
      
      {/* Lightbox dialog */}
      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 bg-black/90 border-none">
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute right-2 top-2 rounded-full bg-black/20 text-white z-50"
            onClick={() => setSelectedImage(null)}
          >
            <X className="h-5 w-5" />
          </Button>
          
          {selectedImage !== null && (
            <div className="relative flex items-center justify-center h-full">
              <img 
                src={images[selectedImage]} 
                alt={`Gallery image ${selectedImage + 1}`} 
                className="max-h-[80vh] max-w-full animate-fade-in"
              />
              
              <Button 
                variant="ghost" 
                size="icon" 
                className="absolute left-2 rounded-full bg-black/20 text-white"
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
                className="absolute right-2 rounded-full bg-black/20 text-white"
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
              
              <div className="absolute bottom-4 flex justify-center w-full">
                {images.map((_, index) => (
                  <button
                    key={index}
                    className={`mx-1 w-2 h-2 rounded-full ${selectedImage === index ? 'bg-white' : 'bg-gray-400'}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedImage(index);
                    }}
                  />
                ))}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ImageGallery;
