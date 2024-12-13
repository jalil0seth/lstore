import { cn } from "@/lib/utils";
import { useState } from "react";

interface ProductImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallback?: string;
}

export const ProductImage = ({ 
  src, 
  alt, 
  className, 
  fallback = "https://via.placeholder.com/400x300?text=Image+Loading...",
  ...props 
}: ProductImageProps) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={cn(
        "transition-opacity duration-300",
        isLoading ? "opacity-50" : "opacity-100",
        className
      )}
      onLoad={() => setIsLoading(false)}
      onError={() => setImgSrc(fallback)}
      {...props}
    />
  );
};