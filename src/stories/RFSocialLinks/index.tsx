import React from "react";
import { RFIconButton } from "../RFIconButton";

interface InputFormProps {
  listIcon: Array<any>;
}

export const RFSocialLinks: React.FC<InputFormProps> = ({ listIcon = [] }) => {
  return (
    <div>
      {listIcon?.map((item) => (
        <RFIconButton className="rf-button" icon={item} onClick={() => {}} />
      ))}
    </div>
  );
};
