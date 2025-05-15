import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import { useState } from 'react'
import './App.css'

function App() {
  let [counter ,updateCounter] = useState(10)
  // let counter = 10;
  const addValue = ()=>{
    if(counter >= 20){
      updateCounter(20)
    }
    else{
      console.log('cliced : ',counter)
      updateCounter(counter+1)
    }
  }
  const removeValue = () =>{
    if(counter <= 0){
      updateCounter(0)
    }
    else{
      updateCounter(counter-1)
    console.log('removed ',counter)
    }
  }
  const handleclic = ()=>{
    
        const popup = window.open("", "","width=100, height= 100");
        if(!popup || popup.closed || typeof popup.closed ==="undefined"){
          console.log("not opend");

        }else{
          console.log("opened" )
        }
      }
  
  return (
    <>
      <h1>Hey I'm Surendra</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br/>
      <button onClick={removeValue}>Remove value</button>
      
      
    </>
  )
}

export default App
