import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.colors['base-background']};
  height: 6.5rem;
  width: 100%;
  
  position: sticky;
  top: 0;
  left: 0;
  z-index: 5;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  nav {
    display: flex;
    gap: .5rem;
    position: relative;

    a {
      width: 2.375rem;
      height: 2.375rem;
      border-radius: 6px;

      display: flex;
      align-items: center;
      justify-content: center;
      
      color: ${props => props.theme.colors['brand-yellow-dark']};
      background: ${props => props.theme.colors['brand-yellow-light']};
    }
  }
`

export const CartButton = styled.button`
  width: 2.375rem;
  height: 2.375rem;
  border-radius: 6px;
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;
  
  color: ${props => props.theme.colors['brand-yellow-dark']};
  background: ${props => props.theme.colors['brand-yellow-light']};

  span {
    position: absolute;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    top: calc(-1.25rem / 2);
    right: calc(-1.25rem / 2);
    color: ${(props) => props.theme.colors["base-white"]};
    background: ${props => props.theme.colors["brand-yellow-dark"]};

    display: flex;
    align-items: center;
    justify-content: center;
    font-size: .75rem;
    font-weight: 700;
  }
`;

export const CityBox = styled.div`
  
      width: 8.937rem;
      height: 2.375rem;
      border-radius: 6px;

      display: flex;
      align-items: center;
      justify-content: center;

      font-size: 0.875rem;
      line-height: 1.3;
      
      color: ${props => props.theme.colors['brand-purple-dark']};
      background: ${props => props.theme.colors['brand-purple-light']};
`;