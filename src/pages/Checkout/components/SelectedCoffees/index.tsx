import { TitleText } from "../../../../components/Typograph";
import { useCart } from "../../../../hooks/useCart";
import { CoffeeCartCard } from "./components/CoffeeCartCard";
import { ConfirmationSection } from "./components/ConfirmationSection";
import { DetailsContainer, SelectedCoffeesContainer } from "./styles";

export function SelectedCoffees() {
  const { cartItems } = useCart();
  
  return (
    <SelectedCoffeesContainer>
      
      <TitleText size="xs" color="subtitle">
        Cafés Selecionados
      </TitleText>

      <DetailsContainer>
        {cartItems.map((item) => (
          <CoffeeCartCard key={item.id} coffee={item} />
        ))}
        
        <ConfirmationSection/>
      </DetailsContainer>
    </SelectedCoffeesContainer>
  )
}