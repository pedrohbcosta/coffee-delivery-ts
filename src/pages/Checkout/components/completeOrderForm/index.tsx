import { Bank, CreditCard, CurrencyDollar, MapPin, Money } from "phosphor-react";
import { useTheme } from "styled-components";
import { TitleText } from "../../../../components/Typograph";
import { SectionTitle } from "../SectionTitle";
import { AddressForm } from "./AddressForm";

import { 
  CashContainer,
  CompleteOrderFormContainer, 
  CreditCardContainer, 
  DebitCardContainer, 
  FormContainer, 
  PaymentContainer, 
  PaymentTypesContainer, 
} from "./styles";

export function CompleteOrderContainer() {
  const { colors } = useTheme();

  return (
    
      <CompleteOrderFormContainer>

        <TitleText size="xs" color="subtitle">
          Complete seu pedido
        </TitleText>
        <FormContainer>

          <SectionTitle
            title="Endereço de Entrega"
            subtitle="Informe o endereço onde deseja receber seu pedido"
            icon={<MapPin color={colors["brand-yellow-dark"]} size={22}/>}
          />
          
          <AddressForm/>

          {/* <CepInput placeholder="CEP"/>
          <StreetInput placeholder="Nome"/>
          <NumberInput placeholder="Número"/>
          <ComplementInput placeholder="Complemento"/>
          <LocalInput placeholder="Bairro"/>
          <CityInput placeholder="Cidade"/>
          <StateInput placeholder="UF"/> */}
        </FormContainer>

        <PaymentContainer>
          
          <SectionTitle
            title="Pagamento"
            subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
            icon={<CurrencyDollar color={colors["brand-purple"]} size={22}/>}
          />

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
      </CompleteOrderFormContainer>
    
  )
}