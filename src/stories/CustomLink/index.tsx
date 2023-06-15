// CustomLink.tsx
import React from 'react';

import "./CustomLink.scss"

interface CustomLinkProps {
  href: string;
  target?: '_blank' | '_parent' | '_self' | '_top';
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  onClick?: () => void;
}

export const CustomLink: React.FC<CustomLinkProps> = ({
  href,
  target,
  className = "custom-link",
  style,
  children,
  onClick,
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <a
      href={href}
      target={target}
      className={className}
      style={style}
      onClick={handleClick}
    >
      {children}
    </a>
  );
};