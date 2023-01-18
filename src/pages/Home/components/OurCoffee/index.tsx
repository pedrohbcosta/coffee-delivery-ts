import { TitleText } from "../../../../components/Typograph";
import { coffees } from "../../../../data/coffees";
import { CardsContainer } from "../Cards";
import { OurCoffeesContainer, CoffeeList } from "./styles";

export function OurCoffees() {
  return (
    <OurCoffeesContainer className="container">
      <TitleText size="l" color="subtitle">
        Nossos cafés
      </TitleText>

      <CoffeeList>
        {coffees.map((coffee) => (
          <CardsContainer key={coffee.id} coffee={coffee} />
        ))}
      </CoffeeList>
    </OurCoffeesContainer>
  );
}