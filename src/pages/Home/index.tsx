import { Hero } from './components/Hero';
import { OurCoffees } from './components/OurCoffee';

import { HomeContainer } from './styles';

export function Home() {

  return (
    <HomeContainer className='container'>

        <Hero/>

        <OurCoffees/>
      
    </HomeContainer>
  )
}
