import { ConfirmationButton } from "../../../../../../components/ConfirmationButton";
import { formatCurrency } from "../../../../../../components/formatCurrency";
import { RegularText } from "../../../../../../components/Typograph";
import { useCart } from "../../../../../../hooks/useCart";
import { ConfirmationSectionContainer } from "./styles";

const DELIVERY_PRICE = 3.5

export function ConfirmationSection() {
  const { cartItemsTotal, cartQuantity } = useCart();

  const cartTotal = cartItemsTotal + DELIVERY_PRICE

  const formattedCartItemsTotal = formatCurrency(cartItemsTotal);
  const formattedDeliveryPrice = formatCurrency(DELIVERY_PRICE);
  const formattedcartTotal = formatCurrency(cartTotal);

  return (
  <ConfirmationSectionContainer>
    <div>
      <RegularText size="s">Total de itens</RegularText>
      <RegularText>R$ {formattedCartItemsTotal}</RegularText>
    </div>
    <div>
      <RegularText size="s">Entrega</RegularText>
      <RegularText>R$ {formattedDeliveryPrice}</RegularText>
    </div>
    <div className="total">
      <RegularText weight="700" color="subtitle" size="l">Total</RegularText>
      <RegularText>R$ {formattedcartTotal}</RegularText>
    </div>
    
    <ConfirmationButton text={"confirmar pedido"} disabled={cartQuantity <= 0} />
  </ConfirmationSectionContainer>
  ) 
}