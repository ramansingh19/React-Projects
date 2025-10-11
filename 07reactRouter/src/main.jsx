import { StrictMode } from 'react'
import App from './App.jsx'
import { createRoot } from 'react-dom/client'
import {  createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider , } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Layout from './layout.jsx'
import Contact from './Components/Contact/Contact.jsx'
import User from './Components/User/User.jsx'
import Github, { gitubuserInfo } from './Components/Github/Github.jsx'


//use createBrowserRouter 
// It is a function that creates a router instance for your React app.
// Works similarly to <BrowserRouter>, but with advanced features like:
// Nested routes with layouts
// Loaders (data fetching before route renders)
// Actions (handling form submissions)
// Error boundaries per route

//Method One for rendering
// const router = createBrowserRouter([
//   {
//     path : '/',
//     element : <Layout />,
//     children : [
//       {
//       path : "",
//       element : <Home />
//       },
//       {
//         //this is use for rendering about , home 
//         path : "/about",
//         element : <About /> 
//       },
//       {
//         path : "/contact",
//         element : <Contact />
//       }
//     ]
//   }
// ])


//Method 2 for rendering
//userid is use to get data dynamically
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element= {<Layout />}>
        <Route path='/' element= {<Home />}/>
        <Route path='/about' element= {<About />}/>
        <Route path='/contact' element= {<Contact />}/>
        <Route path='/user/:userid' element= {<User />}/>
        <Route loader= {gitubuserInfo} path='/github' element= {<Github />}/>
        
        
        
    </Route>
  )
)



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider  router={router}/>
    
  </StrictMode>,
)
