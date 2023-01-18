import { TitleText } from "../../../../components/Typograph";
import { CoffeeCartCard } from "./components/CoffeeCartCard";
import { DetailsContainer, SelectedCoffeesContainer } from "./styles";

export function SelectedCoffees() {
  return (
    <SelectedCoffeesContainer>
      
      <TitleText size="xs" color="subtitle">
        Cafés Selecionados
      </TitleText>

      <DetailsContainer>
        <CoffeeCartCard/>
      </DetailsContainer>
    </SelectedCoffeesContainer>
  )
}