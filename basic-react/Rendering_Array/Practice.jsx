import './Practice.css';


function Practice({feature , feature2}) {
  const list = feature.map((features) => <li>{features}</li>)
  
  return (
    <div className="op">
      {/* <p>{feature}</p> */}
      <p>{list}</p>
      {/* <p>{feature2.a}</p>
      <p>{feature2.b}</p> */}
    </div>
  )
}

export default Practice;