import { Minus, Plus } from "phosphor-react";
import { QuantityInputContainer, IconWrapper } from "./styles";

interface QuantityInputProps {
  onIncrease: () => void;
  onDecrease: () => void;
  quantity: number;
}

export function QuantityInput({ onIncrease, onDecrease, quantity}: QuantityInputProps) {
  return (
    <QuantityInputContainer>
      <IconWrapper disabled={quantity <= 1} onClick={onDecrease}>
        <Minus size={14} weight="fill" />
      </IconWrapper>
      <input type="number" readOnly value={quantity} />
      <IconWrapper onClick={onIncrease}>
        <Plus size={14} weight="fill" />
      </IconWrapper>
    </QuantityInputContainer>
  );
}