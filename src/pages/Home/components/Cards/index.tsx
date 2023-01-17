import { Minus, Plus, ShoppingCart } from 'phosphor-react';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { formatCurrency } from '../../../../components/formatCurrency';
import { coffees } from '../../../../data/coffees';
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




export function CardsContainer( { coffee }: CardsContainerProps) {

  const [ cartItem, setCartItem ] = useState([])

  const cartQuantity = cartItem.length

  function handleAddToCart(coffeeID: number) {
    // const newAdd = coffees.find((coffee) => coffee.id)
    const allCoffes = coffees.map(( coffee ) => {
      if (coffee.id === coffeeID) {
        return {
          ...coffee
        }
      }
      return coffee.id;
    })

    const newAdd = allCoffes

    setCartItem([/*...cartItem,*/ newAdd]);
    // console.log(cartItem)
    console.log(newAdd)
  };

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
            />{cartQuantity}

            <button 
              key={coffee.id}
              onClick={handleAddToCart} 
              className='ProductAddButton'>
                <Plus size={12} color="#8047f8" weight="bold" />
            </button> 
          </div>
        
          <button type='submit' className='ShoppingCartCard'>
            <ShoppingCart size={22} color="#ffffff" weight="fill" />
          </button>
        
      </ProductPriceAndButton>
    </CardContainer>
  )
}