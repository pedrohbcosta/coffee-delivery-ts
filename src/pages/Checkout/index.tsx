import { CartItems } from "./components/CartItems";
import { CompleteOrderContainer } from "./components/completeOrderForm";
import { CheckoutContainer } from "./styles";

export function Checkout() {
  return (
    <CheckoutContainer className="container">
      <CompleteOrderContainer/>
      <CartItems/>
    </CheckoutContainer>
  )
}