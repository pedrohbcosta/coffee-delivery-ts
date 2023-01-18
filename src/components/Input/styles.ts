import styled from "styled-components";

export const InputStyleContainer = styled.input`
  height: 2.625rem;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.colors["base-button"]};
  background: ${(props) => props.theme.colors["base-input"]};
  transition: 0.4s;

  &:focus {
    border-color: ${(props) => props.theme.colors["brand-yellow-dark"]};
  }

  color: ${(props) => props.theme.colors["base-text"]};
  font-size: .75rem;
  padding: 0 .75rem;

  &::placeholder {
    color: ${(props) => props.theme.colors["base-label"]};
  }
`;