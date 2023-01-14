import styled from "styled-components";

export const CardContainer = styled.div`
  height: 19.375rem;
  width: 16rem;
  background: ${props => props.theme['base-card']};
  border-radius: 6px 36px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    height: 6.25rem;
    width: 6.25rem;
  }

  /* .ProductTag {
    font-style: bold;
    font-size: 0.625rem;
    line-height: 1.3;
    color: ${props => props.theme['yellow-dark']};
    background: ${props => props.theme['yellow-light']};

    height: 1.2rem;
    border-radius: 8px;
    padding: .2rem;
    margin-top: .75rem;
  } */

  .ProductName {
    font-family: 'Baloo 2',cursive;
    font-size: 1.25rem;
    line-height: 1.3;
    color: ${props => props.theme['base-subtitle']};
    margin-top: 1rem;
    margin-bottom: 0;
  }

  .ProductDescription {
    font-family: 'Roboto',cursive;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.3;
    
    display: flex;
    align-items: center;
    text-align: center;
    margin: 0.5rem 1.25rem 0 0.5rem ;
  }
`;

export const Tags = styled.div`
  font-style: bold;
  font-size: 0.625rem;
  line-height: 1.3;
  color: ${props => props.theme['yellow-dark']};
  background: ${props => props.theme['yellow-light']};

  height: 1.2rem;
  border-radius: 8px;
  padding: .2rem;
  margin-top: .75rem;
`;

export const ProductPriceAndButton = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 1.25rem;

  .ProductPrice {
    font-family: 'Baloo 2',cursive;
    font-size: 1.5rem;
    line-height: 1.3;
    color: ${props => props.theme['base-subtitle']};

    margin-right: 1.5rem;
  }

  .ProductsToCart {
    display: flex;
    align-items: center;
    justify-content: center;
    
    width: 4.5rem;
    height: 2.375rem;
    border-radius: 6px;
    background: ${props => props.theme['base-button']};
  }

  .ProductQuantity {
    flex: 1;
    background: ${props => props.theme['base-button']};

    display: flex;
    align-items: center;
    justify-content: center;
    
    text-align: center;
    width: 100%;
    border: none;
  }

  .ProductMinusButton,
  .ProductAddButton {
    border: 0;
    background: ${props => props.theme['base-button']};
    cursor: pointer;

    width: 1.8rem;
    height: 2.375rem;
    
    display: flex;
    justify-content: space-around;
    align-items: center;

    border-radius: 6px;
  }

  .ShoppingCartCard {
    background: ${props => props.theme['purple-dark']};
    border: 0;
    border-radius: 6px;
    margin-left: .5rem;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 2.375rem;
    height: 2.375rem;
  }
`;

export const ProductQuantity = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 4.5rem;
  height: 2.375rem;

  border: 0;
  border-radius: 6px;
  background: ${props => props.theme['base-button']};

  margin: 1rem;

  
`;
