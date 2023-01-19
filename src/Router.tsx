import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'

import { Home } from './pages/Home'
import { Checkout } from './pages/Checkout'
import { OrderConfirmed } from './pages/OrderConfirmed'

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />} >
        <Route path='/' element={<Home />} />
        <Route path='/Checkout' element={<Checkout />} />
        <Route path='/OrderConfirmed' element={<OrderConfirmed />} />
      </Route>
    </Routes>
  )
}