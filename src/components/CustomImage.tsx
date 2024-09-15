// Import the Image component from Next.js
import Image from 'next/image';
import { FC, useState } from 'react';

interface CustomImageProps {
  className: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}

const CustomImage: FC<CustomImageProps> = ({ className, src, alt, width, height }) => {
  const [imgSrc, setImgSrc] = useState(src);

  const handleError = () => {
    setImgSrc('/images/placeholder.png'); 
  };

  return (
    <Image
      className={className}
      src={imgSrc}
      alt={alt}
      width={width}
      height={height}
      onError={handleError}
      priority
    />
  );
};

export default CustomImage;
