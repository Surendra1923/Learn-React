import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css' 
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  const obj = { username : "Suir", age:23}
  

  return (
    <>
      <h1>TailWind CSS</h1>
      <Card username="Surendra"/>
      <Card username= "Adi" location = "Bengaluru"/>
      

    </>
  )
}

export default App
