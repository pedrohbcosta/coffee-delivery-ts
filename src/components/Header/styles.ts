import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 5.875rem;
  padding-right: 10rem;

  nav {
    display: flex;
    gap: .5rem;

    a {
      width: 2.375rem;
      height: 2.375rem;
      border-radius: 6px;

      display: flex;
      align-items: center;
      justify-content: center;
      
      color: ${props => props.theme['yellow-dark']};
      background: ${props => props.theme['yellow-light']};
    }
  }
`

export const CityBox = styled.div`
  
      width: 8.937rem;
      height: 2.375rem;
      border-radius: 6px;

      display: flex;
      align-items: center;
      justify-content: center;

      font-size: 0.875rem;
      line-height: 1.3;
      
      color: ${props => props.theme['purple-dark']};
      background: ${props => props.theme['purple-light']};
`;