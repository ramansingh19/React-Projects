import Amazon from './Amazon.jsx'

function AmazonProduct() {
  let styles = {
    display : 'flex',
    flexWrap : 'wrap',
    justifyContent : 'center',
    alignItems : 'center'
  }
  return (
    <div style={styles}>
      <Amazon  title="iPhone 13" idx={0}/>
      
      <Amazon title="iPhone 14" idx={1}/>
      
      <Amazon  title="iPhone 15" idx={2}/>
      
      <Amazon  title="iPhone 16" idx={3}/>

      <Amazon  title="iPhone 17" idx={4}/>
    </div>
  )
}
export default AmazonProduct;