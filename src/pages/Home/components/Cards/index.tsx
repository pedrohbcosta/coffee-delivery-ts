import { ShoppingCart } from 'phosphor-react';
import { formatCurrency } from '../../../../components/formatCurrency';
import { QuantityInput } from '../../../../components/QuantityInput';
import { RegularText, TitleText } from '../../../../components/Typograph';
import { CardContainer, Name, Description, ProductPriceAndButton, Tags, AddCartWrapper } from './styles';

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
          <QuantityInput/>
          <button>
            <ShoppingCart weight="fill" size={22} />
          </button>
        </AddCartWrapper>
        
      </ProductPriceAndButton>
    </CardContainer>
  )
}