import { useState } from 'react'
import Hello from './hello'

function App() {
  
const username = 'Surendra';
  return (
    
    <>
        <Hello/>
        <h1>Hey I'm {username} from Bengaluru</h1>
        <p> here the para for the vite</p>
    </>
  
  )
}

export default App
