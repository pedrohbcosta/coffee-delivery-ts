import HeroCoffee from "../../../../assets/HeroCoffee.svg" ;
import { RegularText } from "../../../../components/Typograph";

import { 
  ShoppingCart, 
  Package, 
  Timer, 
  Coffee 
} from "phosphor-react";

import { 
  BulletsContainer, 
  HeroContainer, 
  HeroContent, 
  HeroTitle 
} from "./styles";

import { BulletsIcon } from "../../../../components/BulletsIcon";
import { useTheme } from "styled-components";


export function Hero() {
  const { colors } = useTheme();
  
  return (
    <HeroContainer>
      <HeroContent className="container">
        <div>
          <section>
            <HeroTitle size="xl">
              Encontre o café perfeito para qualquer hora do dia
            </HeroTitle>
            <RegularText as="h3" size="l" color="subtitle">
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </RegularText>
          </section>

          <BulletsContainer>
            <BulletsIcon
              iconBg={colors["brand-yellow-dark"]}
              icon={<ShoppingCart weight="fill" />}
              text="Compra simples e segura"
            />
            <BulletsIcon
              iconBg={colors["base-text"]}
              icon={<Package weight="fill" />}
              text="Embalagem mantém o café intacto"
            />
            <BulletsIcon
              iconBg={colors["brand-yellow"]}
              icon={<Timer weight="fill" />}
              text="Entrega rápida e rastreada"
            />
            <BulletsIcon
              iconBg={colors["brand-purple"]}
              icon={<Coffee weight="fill" />}
              text="O café chega fresquinho até você"
            />
          </BulletsContainer>
        </div>

        <img src={ HeroCoffee } />
      </HeroContent>
    </HeroContainer>
  );
}