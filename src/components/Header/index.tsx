import { NavLink } from 'react-router-dom'

import { CityBox, HeaderContainer } from "./styles";

import LogoCoffeeDelivery from "../../assets/LogoCoffeeDelivery.svg";
import { ShoppingCart, MapPin } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/" title='Página Inicial'>
        <img src= { LogoCoffeeDelivery } alt="" />
      </NavLink>
      <nav>
        
        <CityBox>
          <MapPin size={24} color="#8047f8" weight="fill" /> 
            Caratinga, MG 
        </CityBox>
        
        <NavLink to="/checkout" title='Carrinho'>
          <ShoppingCart size={24}/>
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}