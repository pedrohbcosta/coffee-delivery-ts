import styled from "styled-components";
import { SectionBaseStyle } from "../../styles";

export const CompleteOrderFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: .75rem;
  width: 40rem;
`;

export const FormContainer = styled(SectionBaseStyle)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const AddressFormContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 12.5rem 17.25rem 3.75rem;
  column-gap: .75rem;
  row-gap: 1rem;
  grid-auto-flow: dense;

  .cep {
    grid-column: span 3;
    max-width: 12.5rem;
  }

  .street {
    grid-column: span 3;
  }

  .complement {
    grid-column: span 2;
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

  user-select: none;
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