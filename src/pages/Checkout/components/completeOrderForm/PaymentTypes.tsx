import { CreditCard, Bank, Money } from "phosphor-react";
import { PaymentTypesContainer, CreditCardContainer, DebitCardContainer, CashContainer } from "./styles";

export function PaymentTypes() {
  return (
    <PaymentTypesContainer>
      
      <CreditCardContainer>
        <CreditCard size={16} />
        cartão de crédito
      </CreditCardContainer>
      
      <DebitCardContainer>
        <Bank size={16} />
        cartão de débito
      </DebitCardContainer>
      
      <CashContainer>
        <Money size={16} />
        dinheiro
      </CashContainer>
    
    </PaymentTypesContainer>
  )
}