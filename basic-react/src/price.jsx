function Price({oldPrice , newPrice}) {
  let oldstyle = {
    textDecorationLine : 'line-through'
  }
  let newstyle = {
    fontWeight : 'bold'
  }
  let styles = {
    backgroundColor : 'yellow',
    height : '30px',
    borderBottomLeftRadius : '10px',
    borderBottomRightRadius : '10px'
  }
  
  return (
    <div style={styles}>
      <span style={oldstyle}>{oldPrice}</span>
      &nbsp;&nbsp;&nbsp;
      <span style={newstyle}>{newPrice}</span>
    </div>
  )
}

export default Price;