import { Trash } from "phosphor-react";
import { formatCurrency } from "../../../../../../components/formatCurrency";
import { QuantityInput } from "../../../../../../components/QuantityInput";
import { RegularText } from "../../../../../../components/Typograph";
import { CartItem } from "../../../../../../contexts/CartContext";
import { useCart } from "../../../../../../hooks/useCart";
import { ActionContainer, CoffeeCartCardContainer, RemoveButton } from "./styles";

interface CoffeeCartCardProps {
  coffee: CartItem
}

export function CoffeeCartCard( {coffee}: CoffeeCartCardProps) {
  const { changeCartItemQuantity, removeCoffeeFromCart } = useCart();

  function handleIncreaseQuantity() {
    changeCartItemQuantity(coffee.id, "increase");
  }
  
  function handleDecreaseQuantity() {
    changeCartItemQuantity(coffee.id, "decrease");
  }

  function handleRemoveCoffeeFromCart() {
    removeCoffeeFromCart(coffee.id);
  }

  const coffeeTotal = coffee.price * coffee.quantity
  const formattedPrice = formatCurrency(coffeeTotal);

  return (
    <CoffeeCartCardContainer>
      <div>
        <img src={coffee.imgUrl} alt="" />
        <div>
          <RegularText color="subtitle"/> {coffee.name}
          <ActionContainer>
            <QuantityInput 
              onDecrease={handleDecreaseQuantity}
              onIncrease={handleIncreaseQuantity}
              quantity={coffee.quantity}
            />
            <RemoveButton onClick={handleRemoveCoffeeFromCart}>
              <Trash size={16}/> REMOVER
            </RemoveButton>
          </ActionContainer>
        </div>
        
      </div>

      <p>R$ {formattedPrice}</p>
    </CoffeeCartCardContainer>
  )
}