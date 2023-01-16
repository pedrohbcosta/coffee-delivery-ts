import { Bank, CreditCard, CurrencyDollar, MapPin, Money } from "phosphor-react";

import { 
  CashContainer,
  CepInput, 
  CityInput, 
  ComplementInput, 
  CreditCardContainer, 
  DebitCardContainer, 
  FormContainer, 
  FormContainerTitle, 
  FormHeader, 
  LocalInput, 
  NumberInput, 
  PaymentContainer, 
  PaymentHeader, 
  PaymentTypesContainer, 
  StateInput, 
  StreetInput 
} from "./styles";

export function CompleteOrderContainer() {
  return (
    <div>
      <FormContainerTitle>
        Complete seu pedido
      </FormContainerTitle>
      <FormContainer>

        <FormHeader>
          <MapPin size={22}/>
            <div>
              <p className="title">Endereço de Entrega</p>
              <p className="subtitle">Informe o endereço onde deseja receber seu pedido</p>
            </div>
        </FormHeader>
        
        <CepInput placeholder="CEP"/>
        <StreetInput placeholder="Nome"/>
        <NumberInput placeholder="Número"/>
        <ComplementInput placeholder="Complemento"/>
        <LocalInput placeholder="Bairro"/>
        <CityInput placeholder="Cidade"/>
        <StateInput placeholder="UF"/>
      </FormContainer>

      <PaymentContainer>
        
        <PaymentHeader>
          <CurrencyDollar size={22}/>
          <div>
            <p className="title">Endereço de Entrega</p>
            <p className="subtitle">Informe o endereço onde deseja receber seu pedido</p>
          </div>
        </PaymentHeader>

        <PaymentTypesContainer>
          <CreditCardContainer>
            <CreditCard size={16} />
            CARTÃO DE CRÉDITO
          </CreditCardContainer>
          
          <DebitCardContainer>
            <Bank size={16} />
            CARTÃO DE DÉBITO
          </DebitCardContainer>
          
          <CashContainer>
            <Money size={16} />
            DINHEIRO
          </CashContainer>
        </PaymentTypesContainer>
      </PaymentContainer>
    </div>
  )
}