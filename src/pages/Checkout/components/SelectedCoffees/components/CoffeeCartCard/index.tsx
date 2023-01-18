import { Trash } from "phosphor-react";
import { QuantityInput } from "../../../../../../components/QuantityInput";
import { RegularText } from "../../../../../../components/Typograph";
import { ActionContainer, CoffeeCartCardContainer, RemoveButton } from "./styles";

export function CoffeeCartCard() {
  return (
    <CoffeeCartCardContainer>
      <div>
        <img src="" alt="" />
        <div>
          <RegularText color="subtitle"/> Expresso Tradicional
          <ActionContainer>
            <QuantityInput />
            <RemoveButton>
              <Trash size={16}/> REMOVER
            </RemoveButton>
          </ActionContainer>
        </div>
      </div>
    </CoffeeCartCardContainer>
  )
}