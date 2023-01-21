import { NavLink } from 'react-router-dom'

import { CartButton, CityBox, HeaderContainer } from "./styles";

import LogoCoffeeDelivery from "../../assets/LogoCoffeeDelivery.svg";
import { ShoppingCart, MapPin } from 'phosphor-react'
import { useCart } from '../../hooks/useCart';

export function Header() {
  const { cartQuantity } = useCart()

  return (
    <HeaderContainer>
      <div className='container'>
        <NavLink to="/" title='Página Inicial'>
          <img src= { LogoCoffeeDelivery } />
        </NavLink>
        <nav>
          
          <CityBox>
            <MapPin size={20} color="#8047f8" weight="fill" /> 
              Porto Alegre, RS 
          </CityBox>
          
          <NavLink to="/checkout" title='Carrinho'>
            <CartButton>
              {cartQuantity >= 1 && <span>{cartQuantity}</span>}
              <ShoppingCart size={20} weight="fill"/>
            </CartButton>
          </NavLink>
        </nav>
      </div>
    </HeaderContainer>
  )
}