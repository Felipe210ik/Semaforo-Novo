import { useState } from 'react'
import './App.css'
import SemaforoSimulador from './components/SemaforoSimulador.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SemaforoSimulador />
    </>
  )
}

export default App
