import './App.css'
import Title from './Title.jsx'
// import {Image} from './image.jsx'
import ProductTab from './ProductTab.jsx';
import Parent from '../Props/Parent.jsx';
import Product from './Product.jsx';
import PracticeTab from '../Rendering_Array/PracticeTab.jsx';
import MsgBox from './msgBox.jsx';
import AmazonProduct from './AmazonProduct.jsx';
import Button from './button.jsx';


function Description() {
  return (
    <>
      <h1>Raman Kumar</h1>
      <button>Click me</button>
    </>
  );
}

function App() {
  return (
    <>
    <Button/>
      {/* <Title />
      <Description /> */}
      {/* <h3>Amazon Great Indian Sale | Live Now !</h3>
      <AmazonProduct /> */}
      {/* <Parent/> */}
      {/* <ProductTab/>
      <MsgBox username={"Raman"} textcolor={"purple"}/>
      <MsgBox username={"I am Student of Computer Science "} textcolor={"purple"}/>
      <MsgBox username={"And , I'm learning React"} textcolor={"purple"}/> */}
      {/* <PracticeTab/> */}
      
    </>
  );
}

export default App;
