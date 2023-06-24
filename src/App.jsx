import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home/Home'
import About from './pages/About/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home />
      <About />
    </>
  )
}

export default App
