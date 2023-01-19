import styled from "styled-components";

export const OrderConfirmedContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin-top: 5rem;

  h1 {
    color: ${(props) => props.theme.colors["brand-yellow-dark"]};
  }

  > section {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const OrderDetailsContainer = styled.div`
  padding: 2.5rem;
  border-radius: 6px 36px;
  background: ${(props) => props.theme.colors["base-background"]};
  min-width: 32rem;
  
  border: 1px solid ${(props) => props.theme.colors["brand-yellow"]};

  display: flex;
  flex-direction: column;
  gap: 2rem;
`;