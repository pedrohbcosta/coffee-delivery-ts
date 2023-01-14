import { Minus, Plus, ShoppingCart } from 'phosphor-react';
import Expresso from './assets/Expresso.svg';
import { CardContainer, ProductPriceAndButton } from './styles';

import storeItems from '../../../../data/items.json'
import { StoreItem } from '../../../../components/StoreItem';

interface CardsContainerProps {
  name: string;
  tag: string;
  description: string;
  price: number;
  imgUrl: string | undefined;
}


export function CardsContainer(storeItems: CardsContainerProps) {
  return (
    <CardContainer>
      <img src={ storeItems.imgUrl } alt="" />
      <p className='ProductTag'>{storeItems.tag}</p>
      <h1 className='ProductName'>{storeItems.name}</h1>
      <p className='ProductDescription'>{storeItems.description}</p>
      <ProductPriceAndButton>
        <p className='ProductPrice'>{storeItems.price}</p> 
        
          <div className='ProductsToCart'>
            <button className='ProductMinusButton'>
              <Minus size={12} color="#8047f8" weight="bold" />
            </button>

            <span className='ProductQuantity'>2</span>

            <button className='ProductAddButton'>
              <Plus size={12} color="#8047f8" weight="bold" />
            </button> 
          </div>
        
          <button type='submit' className='ShoppingCartCard'>
            <ShoppingCart size={32} color="#ffffff" weight="fill" />
          </button>
        
      </ProductPriceAndButton>
    </CardContainer>
  )
}