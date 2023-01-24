import { CompleteOrderContainer } from "./components/completeOrderForm";
import { SelectedCoffees } from "./components/SelectedCoffees";
import { CheckoutContainer } from "./styles";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";

const confirmOrderValidation = zod.object({
  cep: zod.string(),
})

export function Checkout() {
  const checkoutForm = useForm({
    resolver: zodResolver(confirmOrderValidation)
  });

  return (
    <FormProvider {...checkoutForm}>
      <CheckoutContainer className="container">
        <CompleteOrderContainer/>
        <SelectedCoffees/>
      </CheckoutContainer>
    </FormProvider>
    
  )
}