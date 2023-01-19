import { RegularText, TitleText } from "../../components/Typograph";
import { OrderConfirmedContainer, OrderDetailsContainer } from "./styles";

import DeliveryMotocycle from "./assets/DeliveryMotocycle.svg";
import { BulletsIcon } from "../../components/BulletsIcon";
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { useTheme } from "styled-components";

export function OrderConfirmed() {
  const { colors } = useTheme();

  return (
    <OrderConfirmedContainer className="container">
      <div>
        <TitleText size="l" color="subtitle">
          Uhu! Pedido confirmado
        </TitleText>
        <RegularText size="l" color="subtitle">
          Agora é só aguardar que logo o café chegará até você
        </RegularText>
      </div>

      <section>
        <OrderDetailsContainer>
          <BulletsIcon 
            icon={ <MapPin weight="fill"/> } 
            text={
              <RegularText>
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong> 
                <br />
                Farrapos - Porto Alegre, RS
              </RegularText>
            } 
            iconBg={colors["brand-purple"]}
          />
          <BulletsIcon 
            icon={ <Timer weight="fill"/> } 
            text={
              <RegularText>
                Previsão de entrega 
                <br />
                <strong>20 min - 30 min </strong>
              </RegularText>
            } 
            iconBg={colors["brand-yellow"]}
          />
          <BulletsIcon 
            icon={ <CurrencyDollar weight="fill"/> } 
            text={
              <RegularText>
                Pagamento na entrega 
                <br />
                <strong>Cartão de Crédito</strong>
              </RegularText>
            } 
            iconBg={colors["brand-yellow-dark"]}
          />
        </OrderDetailsContainer>

        <img src={ DeliveryMotocycle } alt="" />
      </section>
    </OrderConfirmedContainer>
  )
}