import './Product.css';

// function Products(props){
//   console.dir(props);
  
// }

function Product({ title = 'Enter Product name ' , price = 1 , feature ,  feature2 , feature3 }  ) {
  console.log(title);
  
  return (
    <div className="Product">
      <h1>{title}</h1>
      <h3>Price : {price }</h3>
      <h4>{feature}</h4>
      <p>{feature2?.c}</p>
      <p>{feature3}</p>
    </div>
  );
}

export default Product;
