import IconButton from "@mui/material/IconButton";
import {Facebook, Search, Twitter, YouTube, Instagram} from '@mui/icons-material';
import "./page.scss";

type IconButtonProps = {
  icon: string;
  className?: string;
  onClick?: () => void;
};

const iconMap: { [key: string]: React.ElementType } = {
  search: Search,
  facebook: Facebook,
  twitter: Twitter,
  instagram: Instagram,
  youtube: YouTube,
};


export const RFIconButton = ({ icon, className, onClick }: IconButtonProps) => {
  const IconComponent = iconMap[icon];

  return (
    <IconButton className={className} onClick={onClick}>
      <IconComponent sx={{fontSize: 22}}/>
    </IconButton>
  );
};
