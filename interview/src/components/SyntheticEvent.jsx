function SyntheticEvent() {

 const handleclcik = (e) => {
  console.log(e.target.value);
  console.log(e.nativeEvent);
  
  
}

  return (
    <input type="text" onChange={handleclcik} />
  );

  // function handleClick(event) {
  //   console.log(event);        // SyntheticEvent
  //   console.log(event.type);   // "click"
  //   console.log(event.button);   // "click"
  //   console.log(event.console);   // "click"
  //   console.log(event.log);   // "click"
    
  // }

  // return (
  //   <button onClick={handleClick}>
  //     Click Me
  //   </button>
  // );
}

export default SyntheticEvent;

// Synthetic Event is a React object that wraps the browser's native event and provides a consistent interface across browsers while improving performance.