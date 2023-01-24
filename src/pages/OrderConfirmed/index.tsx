import { RegularText, TitleText } from "../../components/Typograph";
import { OrderConfirmedContainer, OrderDetailsContainer } from "./styles";

import DeliveryMotocycle from "./assets/DeliveryMotocycle.svg";
import { BulletsIcon } from "../../components/BulletsIcon";
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { useTheme } from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { OrderData } from "../Checkout";
import { paymentMethods } from "../Checkout/components/completeOrderForm/PaymentTypes";
import { useEffect } from "react";

interface LocationType {
  state: OrderData;
}

export function OrderConfirmed() {
  const { colors } = useTheme();

  const { state } = useLocation() as unknown as LocationType

  const navigate = useNavigate();

  useEffect(() => {
    if(!state) {
      navigate("/")
    }
  }, []);

  if(!state) return <></>

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
                Entrega em <strong>{state.street}, {state.number}, {state.complement}</strong> 
                <br />
                {state.district} - {state.city}, {state.state}
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
                <strong>{paymentMethods[state.paymentMethod].label}</strong>
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