import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Valentine from './compoents/Valentine'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Valentine></Valentine>
    </>
  )
}

export default App
