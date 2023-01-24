import styled, { css } from "styled-components";

export const InputWrapper = styled.div` //To show the error input on screen
  display: flex;
  flex-direction: column;
  gap: .3rem;
  position: relative;

  > p {
    color: ${(props)=> props.theme.colors["base-error"]};
  }
`;

interface InputStyleContainerProps {
  hasError: boolean;
}

export const InputStyleContainer = styled.div<InputStyleContainerProps>`
  height: 2.625rem;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.colors["base-button"]};
  background: ${(props) => props.theme.colors["base-input"]};
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  overflow: hidden;
  transition: 0.4s;

  &:focus-within {
    border-color: ${(props) => props.theme.colors["brand-yellow-dark"]};
  }

  ${({theme, hasError}) => hasError && css`
    border-color: ${theme.colors["base-error"]};
  `}
`;

export const InputStyled = styled.input`
  flex: 1;
  height: 100%;
  background: none;
  border: none;
  font-size: .75rem;
  padding: 0 .75rem;
  color: ${(props) => props.theme.colors["base-text"]};

  &::placeholder {
    color: ${(props) => props.theme.colors["base-label"]};
  }
`;

export const RightText = styled.p`
  font-size: .75rem;
  margin-right: .75rem;
  font-style: italic;
  color: ${(props) => props.theme.colors["base-label"]};
`;