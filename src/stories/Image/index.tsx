// ImageComponent.tsx
import React from 'react';

// Props Interface
interface ImageComponentProps {
  src: string;
  alt?: string;
  className?: string;
  width?: number | string;
  height?: number | string;
  onClick?: () => void;
  style?: React.CSSProperties;
}

// Image Component
export const Image: React.FC<ImageComponentProps> = ({
  src,
  alt = '',
  className = '',
  width = 'auto',
  height = 'auto',
  onClick = () => {},
  style = {},
}) => {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      onClick={onClick}
      style={style}
    />
  );
};