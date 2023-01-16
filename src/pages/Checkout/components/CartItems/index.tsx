import { CartCard } from "./components/CartCard";
import { CartItemsContainer, CartItemsContainerTitle } from "./styles";

export function CartItems() {
  return (
    <div>
      <CartItemsContainerTitle>
        Cafés selecionados
      </CartItemsContainerTitle>
      
      <CartItemsContainer>
        <CartCard />
      </CartItemsContainer>
    </div>
  )
}