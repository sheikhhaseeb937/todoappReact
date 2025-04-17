import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todoapp from './components/Todoapp'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div>
    <Todoapp />
  </div>
  )
}

export default App
