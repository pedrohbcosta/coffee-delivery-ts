import { MapPin } from "phosphor-react";
import { CepInput, CityInput, ComplementInput, DeliverySubText, DeliveryText, FormContainer, FormHeader, LocalInput, NumberInput, PaymentContainer, StateInput, StreetInput } from "./styles";

export function CompleteOrderContainer() {
  return (
    <div>
      <FormContainer>
        <FormHeader>
          <MapPin/>
          <DeliveryText/> Endereço de Entrega
          <DeliverySubText/> Informe o endereço onde deseja receber seu pedido
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
        <h3>Pagamentos</h3>
      </PaymentContainer>
    </div>
  )
}