import styled from "styled-components";
import { SelectionBaseStyle } from "../../styles";

export const CompleteOrderFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: .75rem;
  width: 40rem;
`;

export const FormContainer = styled(SelectionBaseStyle)`
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

export const PaymentContainer = styled.div`
  background: ${(props) => props.theme.colors['base-card']};
  margin-top: 0.75rem;
  border-radius: 6px;
  padding: 2.5rem;
`;

// export const PaymentTypesContainer = styled.div`
//   display: flex;
//   gap: 0.75rem;
//   margin-top: 2rem;
// `;

export const PaymentTypesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
  > p {
    grid-column: span 3;
    color: ${({ theme }) => theme.colors["base-error"]};
  }
`;