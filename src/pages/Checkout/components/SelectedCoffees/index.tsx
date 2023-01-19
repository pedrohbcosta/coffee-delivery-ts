import { TitleText } from "../../../../components/Typograph";
import { CoffeeCartCard } from "./components/CoffeeCartCard";
import { ConfirmationSection } from "./components/ConfirmationSection";
import { DetailsContainer, SelectedCoffeesContainer } from "./styles";

export function SelectedCoffees() {
  return (
    <SelectedCoffeesContainer>
      
      <TitleText size="xs" color="subtitle">
        Cafés Selecionados
      </TitleText>

      <DetailsContainer>
        <CoffeeCartCard/>
        <CoffeeCartCard/>
        <CoffeeCartCard/>

        <ConfirmationSection/>
      </DetailsContainer>
    </SelectedCoffeesContainer>
  )
}