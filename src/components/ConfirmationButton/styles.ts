import styled from "styled-components";

export const ConfirmationButtonContainer = styled.button`
  padding: 0.75rem;
  color: ${(props) => props.theme.colors["base-white"]};
  font-weight: 700;
  background: ${(props) => props.theme.colors["brand-yellow"]};
  font-size: ${(props) => props.theme.textSizes["components-button-g"]};
  border: none;
  border-radius: 6px;
  text-transform: uppercase;
  line-height: 1.3rem;

  transition: 0.4s;

  :disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  :not(:disabled):hover {
    background: ${(props) => props.theme.colors["brand-yellow-dark"]};
  }
`;
