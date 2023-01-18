import { CurrencyDollar, MapPin } from "phosphor-react";
import { useTheme } from "styled-components";
import { TitleText } from "../../../../components/Typograph";
import { SectionTitle } from "../SectionTitle";
import { AddressForm } from "./AddressForm";
import { PaymentTypes } from "./PaymentTypes";

import { 
  CompleteOrderFormContainer, 
  FormContainer, 
  PaymentContainer, 
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

        </FormContainer>

        <PaymentContainer>
          
          <SectionTitle
            title="Pagamento"
            subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
            icon={<CurrencyDollar color={colors["brand-purple"]} size={22}/>}
          />

          <PaymentTypes/>

        </PaymentContainer>
      
      </CompleteOrderFormContainer>
    
  )
}