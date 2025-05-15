import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'

import App from './App.jsx'

const reactElement = (
  <a href='https://google.com' target='_blank'>Viist Google</a>
)
const anotherReactElement = React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  'visit google lin from vite'
)
createRoot(document.getElementById('root')).render(
  
  <App/>
)