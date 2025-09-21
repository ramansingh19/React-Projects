function handlesubmit(event){
  event.preventDefault();
  console.log('form has is submitted');
  
}


export default  function Form() {
  return (
    <form onSubmit={handlesubmit}>
      <input type="text"  placeholder=""/>
      <button>Submit</button>
    </form>
  )
}