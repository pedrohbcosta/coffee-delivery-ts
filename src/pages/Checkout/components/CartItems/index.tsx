import { SelectedCoffees } from "./components/CartCard";
import { CartItemsContainer, CartItemsContainerTitle } from "./styles";

export function CartItems() {
  return (
    <div>
      <CartItemsContainerTitle>
        Cafés selecionados
      </CartItemsContainerTitle>
      
      <CartItemsContainer>
        <SelectedCoffees />
      </CartItemsContainer>
    </div>
  )
}