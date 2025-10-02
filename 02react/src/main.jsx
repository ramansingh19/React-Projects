import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App.jsx'
import { Children } from 'react'

//return the statement 
const domRender = (
  <a href="https://google.com" target='_blank'>Visit google</a>
)

//returm as an object
const reactCustom = React.createElement(
  'a',
  {href : "https://google.com" , target : '_blank'},
  'click here to visit google'
)

// const anotherRender = {
//   type : 'a',
//   props: {
//     href: 'https://google.com',
//     target : '-blank'
//   },
//   Children : 'visit the site '
// }

createRoot(document.getElementById('root')).render(
  
  reactCustom
)
