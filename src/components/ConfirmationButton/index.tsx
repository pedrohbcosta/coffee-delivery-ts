import { ButtonHTMLAttributes } from "react";
import { ConfirmationButtonContainer } from "./styles";

interface ConfirmationButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string | number;
}

export function ConfirmationButton({ text, ...props}: ConfirmationButtonProps) {
  return <ConfirmationButtonContainer {...props}>{text}</ConfirmationButtonContainer>
  
}