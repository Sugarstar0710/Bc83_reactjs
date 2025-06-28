import { useState } from 'react'
import Baitap1 from './Bt1'
import Header from './Bt1/header'
import Baitap2 from './Bt2'
import Renderingelements from './rendering-elements/Index'
import EventClick from './event-click/Index'
import State from './State/Index'
import ChangeColorCar from './Change-color-car/Index'
import LitsKeys from './list-keys/Index'
import Conmmiunication from './assets/Commiunication'
import ShoppingPhone from './assets/shopping-phone'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Learn react js</h1>
      {/* <Baitap1/>
      <Baitap2/> */}
      <Renderingelements/>
      <EventClick/>
      <State/>  
      <ChangeColorCar/>
      <LitsKeys/>
      <Conmmiunication/>
      <ShoppingPhone/>
    </div>
  )
}

export default App
