import { Routes, Route } from "react-router-dom";

import './App.css'
import { Login } from './components/ControlComponent'
import Forwardref from './components/Forwardref'
import Practice01 from './components/practice01'
import Practice02 from './components/Practice02'
import SyntheticEvent from './components/syntheticEvent'
import UncontrolledCom from './components/UncontrolledCom'
import Map from './components/map'
import Callback from './components/Callback'
import Memo from './components/Memo'
import State from './components/State'
import Effect from './components/Effect'

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<State />} />
      <Route path="/effect" element={<Effect />} />
      <Route path="/memo" element={<Memo />} />
      <Route path="/map" element={<Map />} />
      <Route path="/callback" element={<Callback />} />
      <Route path="/SyntheticEvent" element={<SyntheticEvent />} />
      <Route path="/Practice02" element={<Practice02 />} />
      <Route path="/Practice01" element={<Practice01 />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Uncontrolled" element={<UncontrolledCom />} />
      <Route path="/Forwardref" element={<Forwardref />} />
    </Routes>
    
    
  )
}

export default App
