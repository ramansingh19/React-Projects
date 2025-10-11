import './App.css'
import AnotherLogin from './Components/AnotherLogin'
import Anotherprofile from './Components/Anotherprofile'
import Login from './Components/login'
import Profile from './Components/Profile'
import UserContextProvider from './Context/UserContextProvider'

function App() {
  

  return (
    <UserContextProvider>
    <h1 className='bg-pink-400 text-5xl p-4'>Context API</h1>
    <Login /> 
    <Profile /> 
    {/* <AnotherLogin />
    <Anotherprofile /> */}
    </UserContextProvider >
  )
}

export default App
