// Banner.tsx
import React from "react";
import './banner.scss';

interface BannerProps {
  className?: string;
  style: React.CSSProperties;
  children: string;
}

export const Banner: React.FC<BannerProps> = ({
  className,
  style,
  children,
}) => {
  return (
    <div className={`banner ${className}`} style={style} dangerouslySetInnerHTML={{'__html': children}}>
      {/* {children} */}
    </div>
  );
};
