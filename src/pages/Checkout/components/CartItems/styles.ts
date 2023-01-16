import styled from "styled-components";

export const CartItemsContainerTitle = styled.p`
  font-family: ${(props) => props.theme.fonts['title']};
  font-size: ${(props) => props.theme.textSizes['title-title-xs']};
  margin-bottom: 0.93rem;
`;

export const CartItemsContainer = styled.div`
  width: 28rem;
  background: ${props => props.theme.colors['base-card']};
  border-radius: 6px 44px;
`;