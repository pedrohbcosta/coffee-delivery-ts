import { CompleteOrderContainer } from "./components/completeOrderForm";
import { SelectedCoffees } from "./components/SelectedCoffees";
import { CheckoutContainer } from "./styles";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";

const confirmOrderValidationSchema = zod.object({
  cep: zod.string().min(1, 'Informe o CEP'),
  street: zod.string().min(1, 'Informe a rua'),
  number: zod.string().min(1, 'Informe o número'),
  complement: zod.string(),
  district: zod.string().min(1, 'Informe o bairro'),
  city: zod.string().min(1, 'Informe a cidade'),
  state: zod.string().min(1, 'Informe o estado'),
  
})

export type OrderData = zod.infer<typeof confirmOrderValidationSchema>

type CheckoutFormData = OrderData;

export function Checkout() {
  const checkoutForm = useForm<CheckoutFormData>({
    resolver: zodResolver(confirmOrderValidationSchema)
  });

  const { handleSubmit } = checkoutForm;

  function handleConfirmOrder(data: CheckoutFormData) {
    console.log(data)
  }

  return (
    <FormProvider {...checkoutForm}>
      <CheckoutContainer 
        className="container" 
        onSubmit={handleSubmit(handleConfirmOrder)}
      >
        <CompleteOrderContainer/>
        <SelectedCoffees/>
      </CheckoutContainer>
    </FormProvider>
    
  )
}