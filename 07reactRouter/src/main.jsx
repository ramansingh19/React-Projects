import { StrictMode } from 'react'
import App from './App.jsx'
import { createRoot } from 'react-dom/client'
import {  createBrowserRouter, RouterProvider , } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Layout from './layout.jsx'

const router = createBrowserRouter([
  {
    path : '/',
    element : <Layout />,
    children : [
      {
      path : "/home ",
      element : <Home />
      },
      {
        //this is use for rendering about , home 
        path : "/about",
        element : <About /> 
      },
    ]
  }
])




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider  router={router}/>
    
  </StrictMode>,
)
