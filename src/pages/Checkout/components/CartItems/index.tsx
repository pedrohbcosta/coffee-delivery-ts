import { SelectedCoffees } from "./components/SelectedCoffees";
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