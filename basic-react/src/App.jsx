import './App.css'
import Title from './Title.jsx'
import {Image} from './image.jsx'
import './image.css'

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
      <Image/>
    </>
  );
}

export default App;
