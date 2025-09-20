function print() {
  console.log('Hello My Grace!');
  
}


function shivam(){
  console.log('Shivam Sir, i want that you buy , i am glad that your finally buying ');
  
}



function Button(){
  return (
    <div>
      <button onClick={print}>Click Me</button>
      <h1 onClick={shivam}>iPhone 16</h1>
      
    </div>
  )
}

export default Button;