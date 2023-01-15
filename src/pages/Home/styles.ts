import styled from "styled-components";

export const HomeContainer = styled.main`
  padding: 5.875rem;
  width: 100%;
  /* margin-bottom: 9.6rem; */
`;

export const HeroSection = styled.section`
  display: flex;

  h1 {
    font-family: 'Baloo 2', cursive;
    font-size: 3rem;
    font-weight: 800;
    line-height: 1.3;
    color: ${props => props.theme.colors['base-title']};
    
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.25rem;
    line-height: 1.3;
    font-weight: 400;
    color: ${props => props.theme.colors['base-subtitle']};

    margin-bottom: 3rem;
  }
`;

export const HeroSectionText = styled.section`
  margin-right: 4rem;
`;

export const BulletsSection = styled.section`
  display: flex;
  justify-content: space-between;

  svg {
    height: 2rem;
    width: 2rem;
  }

  .ShoppingCart {
    svg {
      background: ${props => props.theme.colors['brand-yellow-dark']};
      color: ${props => props.theme.colors['base-white']};
      border-radius: 50%;
      padding: 0.4rem;
    }
  }

  .Timer {
    svg {
      background: ${props => props.theme.colors['brand-yellow']};
      color: ${props => props.theme.colors['base-white']};
      border-radius: 50%;
      padding: 0.4rem;
    }
  }

  .Package {
    svg {
      background: ${props => props.theme.colors['base-text']};
      color: ${props => props.theme.colors['base-white']};
      border-radius: 50%;
      padding: 0.4rem;
    }
  }

  .Coffee {
    svg {
      background: ${props => props.theme.colors['brand-purple']};
      color: ${props => props.theme.colors['base-white']};
      border-radius: 50%;
      padding: 0.4rem;
    }
  }

  li {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 1.25rem 1.5rem;

    font-size: 1rem;
    line-height: 1.3;

    padding-top: 1.25rem;
  }
`;

export const MainSection = styled.section`
  margin-top: 9.1rem;

  h1 {
    font-family: 'Baloo 2',cursive;
    font-size: 2rem;
    color: ${props => props.theme.colors['base-subtitle']};
    margin-bottom: 3.375rem;
  }
`;

export const ProductsContainer = styled.div`
  width: 100%;
  height: 100vh;
  
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;