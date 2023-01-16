import styled from "styled-components";

export const FormContainer = styled.form`
  width: 40rem;
  background: ${(props) => props.theme.colors['base-card']};
  padding: 2.5rem;
  border-radius: 6px;
`;

export const FormHeader = styled.div`
  margin-bottom: 2rem;
`;

export const DeliveryText = styled.p`
  font-size: ${(props) => props.theme.textSizes['text-regular-m']}
`;

export const DeliverySubText = styled.p`
  font-size: ${(props) => props.theme.textSizes['text-regular-s']};
`;

const BaseInput = styled.input`
  margin-bottom: 1rem;
  background: ${(props) => props.theme.colors['base-input']};
  height: 2.625rem;
  border-radius: 4px;
  border: 0;
  padding: 0.75rem;
  font-size: ${(props) => props.theme.textSizes['text-regular-s']};
`;

export const CepInput = styled(BaseInput) `
  display: block;
  margin-bottom: 1rem;
`;

export const StreetInput = styled(BaseInput)`
  display: block;
  width: 100%;
`;

export const NumberInput = styled(BaseInput)`
  width: 12.5rem;
  margin-right: .75rem;
`;

export const ComplementInput = styled(BaseInput)`
  width: 21.75rem;
`; 

export const LocalInput = styled(BaseInput)`
  width: 12.5rem;
  margin-right: .75rem;
  margin-bottom: 0;
`;

export const CityInput = styled(BaseInput)`
  width: 17.25rem;
  margin-right: .75rem;
  margin-bottom: 0;
`;

export const StateInput = styled(BaseInput)`
  width: 3.75rem;
  margin-bottom: 0;
`;

export const PaymentContainer = styled.div`
  background: ${(props) => props.theme.colors['base-card']};
  margin-top: 0.75rem;
  border-radius: 6px;
  padding: 2.5rem;
`;