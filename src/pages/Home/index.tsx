import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';
import HeroCoffee from '../../assets/HeroCoffee.svg';

import storeItems from '../../data/items.json'

import { CardsContainer } from './components/Cards';
import { BulletsSection, HeroSection, HeroSectionText, HomeContainer, MainSection, ProductsContainer } from './styles';

export function Home() {
  return (
    <HomeContainer>
      <HeroSection>
        <HeroSectionText>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
          
          <BulletsSection>
            <ul>
              <li className='ShoppingCart'><ShoppingCart color="#ffffff" weight="fill" /> Compra simples e segura</li>
              <li className='Timer'><Timer color="#ffffff" weight="fill" /> Entrega rápida e rastreada</li>
            </ul>
            <ul>
              <li className='Package'><Package color="#ffffff" weight="fill" /> Embalagem mantém o café intacto</li>
              <li className='Coffee'><Coffee color="#ffffff" weight="fill" /> O café chega fresquinho até você</li>
            </ul>
          </BulletsSection>
          
        </HeroSectionText>
        
        <img src={ HeroCoffee } alt="" />
      </HeroSection>

      <MainSection>
        <h1>Nossos cafés</h1>

        <ProductsContainer>
          {storeItems.map(store => {
            return (
              <CardsContainer  
                key={store.id}
                name={store.name}
                tag={store.tag}
                description={store.description}
                price={store.price}
                imgUrl={store.imgUrl}
              />
            )
          })}
        </ProductsContainer>
      
      </MainSection>
    </HomeContainer>
  )
}
