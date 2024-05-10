import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/Header'
import Home from './components/Home/Home.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p className='text-black float-left'> fsafdsfa</p>
      <Home/>
    </>
  )
}

export default App
