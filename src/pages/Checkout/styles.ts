import styled from "styled-components";

export const CheckoutContainer = styled.div`
  display: flex;
  gap: 2rem;
`;

export const SelectionBaseStyle = styled.div`
  width: 100%;
  background: ${(props) => props.theme.colors["base-card"]};
  border-radius: 6px;
  padding: 2.5rem;
`;