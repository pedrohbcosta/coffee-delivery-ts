import { AddressFormContainer } from "./styles";

export function AddressForm() {
  return (
    <AddressFormContainer>
      <input placeholder="CEP" type="number" className="cep"/>
      <input placeholder="Rua" className="street"/>
      <input placeholder="Número" type="number" />
      <input placeholder="Complemento" className="complement"/>
      <input placeholder="Bairro" />
      <input placeholder="Cidade" />
      <input placeholder="UF" />
    </AddressFormContainer>
  )
}