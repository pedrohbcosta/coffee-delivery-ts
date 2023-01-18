import { ReactNode } from "react";
import { BulletsIconContainer, IconContainer } from "./styles";

interface BulletsIconProps {
  icon: ReactNode;
  text: string | ReactNode;
  iconBg : string;
}

export function BulletsIcon({ icon, text, iconBg }: BulletsIconProps) {
  return (
    <BulletsIconContainer>
      <IconContainer iconBg={iconBg}>{icon}</IconContainer>
      {typeof text === 'string' ? <p>{text}</p> : text }
    </BulletsIconContainer>
  )
}