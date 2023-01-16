import styled from "styled-components";

export const FormContainerTitle = styled.p`
  font-family: ${(props) => props.theme.fonts['title']};
  font-size: ${(props) => props.theme.textSizes['title-title-xs']};
  margin-bottom: 0.93rem;
`;

export const FormContainer = styled.form`
  width: 40rem;
  background: ${(props) => props.theme.colors['base-card']};
  padding: 2.5rem;
  border-radius: 6px;
`;

export const FormHeader = styled.div`
  margin-bottom: 2rem;
  display: flex;

  svg {
      color: ${(props) => props.theme.colors['brand-yellow-dark']};
    }

  > div {
    margin-left: .5rem;

    .title {
      font-size: ${(props) => props.theme.textSizes['text-regular-m']};
      color: ${(props) => props.theme.colors['base-subtitle']};
      line-height: 1.3;
    }

    .subtitle {
      font-size: ${(props) => props.theme.textSizes['text-regular-s']};
      color: ${(props) => props.theme.colors['base-text']};
    }
  }
`;

const BaseInput = styled.input`
  margin-bottom: 1rem;
  background: ${(props) => props.theme.colors['base-input']};
  height: 2.625rem;
  border-radius: 4px;
  border: 0;
  padding: 0.75rem;
  font-size: ${(props) => props.theme.textSizes['text-regular-s']};

  &:focus {
    border: 1px solid ${(props) => props.theme.colors['brand-yellow-dark']};
  }
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

export const PaymentHeader = styled.div`
  margin-bottom: 2rem;
  display: flex;

  svg {
      color: ${(props) => props.theme.colors['brand-purple']};
    }

  > div {
    margin-left: .5rem;

    .title {
      font-size: ${(props) => props.theme.textSizes['text-regular-m']};
      color: ${(props) => props.theme.colors['base-subtitle']};
      line-height: 1.3;
    }

    .subtitle {
      font-size: ${(props) => props.theme.textSizes['text-regular-s']};
      color: ${(props) => props.theme.colors['base-text']};
    }
  }
`;

export const PaymentTypesContainer = styled.div`
  display: flex;
  gap: 0.75rem;
`;

const BasePayment = styled.button`
  width: 11rem;
  background: ${(props) => props.theme.colors['base-button']};
  color: ${(props) => props.theme.colors['base-text']};
  border: 0;
  border-radius: 6px;
  padding: 0.75rem;
  font-size: ${(props) => props.theme.textSizes['components-button-s']};

  &:hover {
    background: ${(props) => props.theme.colors['base-hover']};
    color: ${(props) => props.theme.colors['base-subtitle']};
  }

  &:focus {
    background: ${(props) => props.theme.colors['brand-purple-light']};
    border: 1px solid ${(props) => props.theme.colors['brand-purple']};
  }
`;

export const CreditCardContainer = styled(BasePayment)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

export const DebitCardContainer = styled(BasePayment)`
display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

export const CashContainer = styled(BasePayment)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
`;