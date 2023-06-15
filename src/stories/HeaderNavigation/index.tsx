// HeaderNavigation.tsx
import React from "react";
import { CustomLink, RFLogo } from "../index";
import './HeaderNavigation.scss';


interface NavItem {
  title: string;
  url: string;
}

export const HeaderNavigation: React.FC = () => {
  const navItems: NavItem[] = [
    { title: "Thương hiệu", url: "#" },
    { title: "Đồ chay", url: "#" },
    { title: "Sản phẩm cốt lõi ", url: "#" },
    { title: "Công thức món ăn", url: "#" },
  ];

  return (
    <nav className="header-navigation">
      <div className="items">
        {navItems.map((item, index) => (
          <CustomLink
            key={index}
            className="nav-item"
            
            href={item.url}
          >
            {item.title}
          </CustomLink>
        ))}
      </div>
      <RFLogo
        src="https://www.cerealbio.fr/sites/default/files/Image%201_0.png"
        alt="Company Logo"
        width={150}
      />
    </nav>
  );
};
