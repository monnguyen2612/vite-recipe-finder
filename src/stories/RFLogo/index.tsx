// Logo.tsx
import React from 'react';
import { Image } from '../index';
import "./RFLogo.scss";

// Props Interface
interface LogoProps {
  src: string;
  alt?: string;
  className?: string;
  width?: number | string;
  height?: number | string;
  onClick?: () => void;
  style?: React.CSSProperties;
}

// Logo Component
export const RFLogo: React.FC<LogoProps> = ({
  src,
  alt = 'Logo',
  className = 'logo',
  width = 'auto',
  height = 'auto',
  onClick = () => {},
  style = {},
}) => {
  return (
    <Image
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