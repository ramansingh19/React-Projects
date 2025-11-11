import authservice from './appwrite/Auth';
import {useDispatch} from 'react-redux'
import { useEffect, useState } from 'react';
import {login , logout} from './Store/slicestore'
import './App.css'
import Header from './Components/Header/header';
import Footer from './Components/Footer/footer';

function App() {
  const [loading , setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
      authservice.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({userData}))
        }else{
          dispatch(logout())
        }
      }) 
      .finally(() => setLoading(false))
  } , [])

  //access in env variable 
  console.log(import.meta.env.VITE_APPWRITE_URL);
  
  return !loading ? (
    <div className='min-h-screen text-center flex flex-wrap content-between bg-gray-500'>
      <div className='w-full block font-bold text-3xl font-serif p-3' >
        <Header />
        <main>
          {/* <Outlet/> */}
        </main>
        <Footer />
      </div>
      </div> 
  ) : null
}

export default App
