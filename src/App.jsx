import { useState } from 'react'
import Baitap1 from './Bt1'
import Header from './Bt1/header'
import Baitap2 from './Bt2'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Learn react js</h1>
      <Baitap1/>
      <Baitap2/>
    </div>
  )
}

export default App
