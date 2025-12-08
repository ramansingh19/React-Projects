import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './Store/store.js'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Authlayout ,Login } from './Components/index.js'
import HomePage from './Pages/HomePage.jsx'
import AddPost from "./pages/AddPost";
import Signup from './pages/Signup'
import EditPost from "./pages/EditPost";
import Post from "./pages/Post";
import AllPost from "./pages/AllPost.jsx";


const router = createBrowserRouter([
  {
    path : '/',
    element : <App />,
    children : [
      {
        path : '/',
        element : <HomePage />
      },
      {
        path: '/login',
        element : (
            <Authlayout authentication={false} >
                <Login />
            </Authlayout>
        )
      },
      {
        path: '/signup',
        element : (
            <Authlayout authentication={false} >
                <Signup />
            </Authlayout>
        )
      },
      {
        path: '/all-posts',
        element : (
            <Authlayout authentication >
                {" "}
                <AllPost />
            </Authlayout>
        )
      },
      {
        path: '/add-post',
        element : (
            <Authlayout authentication >
              {" "}
                <AddPost />
            </Authlayout>
        )
      },
      {
        path: '/edit-post/:slug',
        element : (
            <Authlayout  >
              {" "}
                <EditPost />
            </Authlayout>
        )
      },
      {
        path: '/post/:slug',
        element : <Post />
      }

    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter> 
        <RouterProvider router={router} />
      </BrowserRouter>
    </Provider>
  </StrictMode>
)
