import { ShoppingCart } from 'phosphor-react';
import { useState } from 'react';
import { formatCurrency } from '../../../../components/formatCurrency';
import { QuantityInput } from '../../../../components/QuantityInput';
import { RegularText, TitleText } from '../../../../components/Typograph';
import { useCart } from '../../../../hooks/useCart';
import { CardContainer, Name, Description, ProductPriceAndButton, Tags, AddCartWrapper } from './styles';

export interface Coffee {
  id: number;
  name: string;
  tags: string[];
  description: string;
  price: number;
  imgUrl: string | undefined;
}

interface CardsContainerProps {
  coffee: Coffee
}

export function CardsContainer( { coffee }: CardsContainerProps) {
  const [quantity, setQuantity] = useState(1);

  function handleIncrease() {
    setQuantity((state) => state + 1);
  }
  
  function handleDecrease() {
    setQuantity((state) => state - 1);
  }
  
  const { addCoffeeToCart } = useCart();

  function handleAddToCart() {
    const coffeeToAdd = {
      ...coffee,
      quantity,
    };
    addCoffeeToCart(coffeeToAdd);
  }

  const formattedPrice = formatCurrency(coffee.price);

  return (
    <CardContainer>
      <img src={ coffee.imgUrl } alt="" />
      
      <Tags>
        {coffee.tags.map((tag) => (
          <span key={`${coffee.id}${tag}`}>{tag}</span>
        ))}
      </Tags>

      <Name>{coffee.name}</Name>
      <Description>{coffee.description}</Description>
      
      <ProductPriceAndButton>
        <div>
          <RegularText size="s">R$</RegularText>
          <TitleText size="m" color="text" as="strong">
            {formattedPrice}
          </TitleText>
        </div> 
        
        <AddCartWrapper>
          <QuantityInput
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
            quantity={quantity}
          />
          <button onClick={handleAddToCart}>
            <ShoppingCart weight="fill" size={22} />
          </button>
        </AddCartWrapper>
        
      </ProductPriceAndButton>
    </CardContainer>
  )
}