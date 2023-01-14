import { Minus, Plus, ShoppingCart } from 'phosphor-react';
import { useQuery } from 'react-query';
import { formatCurrency } from '../../../../components/formatCurrency';
import { CardContainer, ProductPriceAndButton, Tags } from './styles';

export interface Coffee {
  id: number;
  name: string;
  tags: string[];
  description: string;
  price: number;
  imgUrl: string | undefined;
  amount: number;
}

interface CardsContainerProps {
  coffee: Coffee
}


const handleAddToCart = (clickItem: Coffee) => null;

export function CardsContainer( { coffee }: CardsContainerProps) {

  

  return (
    <CardContainer>
      <img src={ coffee.imgUrl } alt="" />
      
      <Tags>
        {coffee.tags.map((tag) => (
          <span key={`${coffee.id}${tag}`}>{tag}</span>
        ))}
      </Tags>
      <h1 className='ProductName'>{coffee.name}</h1>
      <p className='ProductDescription'>{coffee.description}</p>
      <ProductPriceAndButton>
        <p className='ProductPrice'>{formatCurrency(coffee.price)}</p> 
        
          <div className='ProductsToCart'>
            <button className='ProductMinusButton'>
              <Minus size={12} color="#8047f8" weight="bold" />
            </button>

            <input 
              className='ProductQuantity' 
              type="number" 
              readOnly 
              value={1}
            />

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