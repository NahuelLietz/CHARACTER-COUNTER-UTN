import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Body from './components/Body.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <>
        <Body/>
      </>
  )
}

export default App
