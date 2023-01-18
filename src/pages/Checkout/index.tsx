import { CompleteOrderContainer } from "./components/completeOrderForm";
import { SelectedCoffees } from "./components/SelectedCoffees";
import { CheckoutContainer } from "./styles";

export function Checkout() {
  return (
    <CheckoutContainer className="container">
      <CompleteOrderContainer/>
      <SelectedCoffees/>
    </CheckoutContainer>
  )
}