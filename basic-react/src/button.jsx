function print() {
  console.log('Hello My Grace!');
  
}


function shivam(){
  console.log('Shivam Sir, i want that you buy , i am glad that your finally buying ');
  
}

function doubleclick(){
  console.log('You double clicked');
  
}

function mouseover(){
  console.log('you hover the mouse');
  
}



function Button(){
  return (
    <div>
      <button onClick={print}>Click Me</button>
      <h1 onClick={shivam}>iPhone 16</h1>
      <button onDoubleClick={doubleclick}>Press Me</button>
      <button onMouseMove={mouseover}>Click</button>
      
    </div>
  )
}

export default Button;