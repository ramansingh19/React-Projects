import { useState } from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

import Counterr from './Components/Counter';
import Bgchanger from './Components/bgChanger';
import Passwordchanger from './Components/Passwordchg';
import CurrencyConvetor from './CurrencyConvertor/CurrencyCov';

import Home from './reactRouter/Home/Home.jsx';
import About from './reactRouter/About/About.jsx';
import Layout from './reactRouter/Layout.jsx';
import Contact from './reactRouter/Contact/Contact.jsx';
import User from './reactRouter/User/User.jsx';
import Github, { githubuserInfo } from './reactRouter/Github/Github.jsx';

function App() {
  const [count, setCount] = useState(0);

  // Define router inside App
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/user/:userid' element={<User />} />
        <Route path='/github' element={<Github />} loader={githubuserInfo} />
      </Route>
    )
  );

  return (
    <>
      {/* Your other projects/components */}
      <Counterr />
      <Bgchanger />
      <Passwordchanger />
      <CurrencyConvetor />

      {/* RouterProvider will handle all routes */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
