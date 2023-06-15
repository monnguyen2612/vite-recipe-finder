// Header.tsx
import React from 'react';
import "./header.scss"

interface HeaderProps {
  topLeftContent?: React.ReactNode;
  topRightContent?: React.ReactNode;
}

export const Header: React.FC<HeaderProps> = ({ topLeftContent, topRightContent }) => {
  return (
    <header className="header">
      <div className="top-left">{topLeftContent}</div>
      <div className="top-right">{topRightContent}</div>
    </header>
  );
};