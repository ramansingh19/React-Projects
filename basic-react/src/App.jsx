import './App.css'
import Title from './Title.jsx'
// import {Image} from './image.jsx'
import ProductTab from './ProductTab.jsx';
import Parent from '../Props/Parent.jsx';


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
      <Title />
      <Description />
      {/* <Image/> */}
      <ProductTab/>
      <Parent/>
      
    </>
  );
}

export default App;
