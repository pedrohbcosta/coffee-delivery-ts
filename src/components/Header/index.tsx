import { NavLink } from 'react-router-dom'

import { CityBox, HeaderContainer } from "./styles";

import LogoCoffeeDelivery from "../../assets/LogoCoffeeDelivery.svg";
import { ShoppingCart, MapPin } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <div className='container'>
        <NavLink to="/" title='Página Inicial'>
          <img src= { LogoCoffeeDelivery } alt="" />
        </NavLink>
        <nav>
          
          <CityBox>
            <MapPin size={20} color="#8047f8" weight="fill" /> 
              Porto Alegre, RS 
          </CityBox>
          
          <NavLink to="/checkout" title='Carrinho'>
            <ShoppingCart size={20} weight="fill"/>
          </NavLink>
        </nav>
      </div>
    </HeaderContainer>
  )
}