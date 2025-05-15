import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor] = useState("green")

  return (
    <div className='w-full h-full duration-200'
      style={{backgroundColor:color}}>

        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'> 

          <div className='flex flex-wrap justify-center bg-white shadow-lg px-3 py-1 rounded-xl'>

            <button onClick={()=> setColor("green")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "green"}}>Green</button>
            <button onClick={()=> setColor("yellow")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "yellow"}}>Yellow</button>
            <button onClick={()=> setColor("blue")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "blue"}}>Blue</button>

          </div>

        </div>


    </div>
    
  )
}

export default App
