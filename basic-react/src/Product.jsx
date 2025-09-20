// Product.jsx
import './Product.css';

function Product({ title , price = 1, }) {
  // let style = {backgroundColor : "pink"};
//let isDiscount = price > 30000  && price < 50000 ? 'Discount of 5%' : "" ;

// isDiscount = price > 50000 ? 'Discount of 10%' : isDiscount;
  return (
    <div className="Product" >
      <h1>{title}</h1>
      <h3>Price : {price}</h3>

      {price > 100000 ? <p style={{color : "red"}}>Discount is 15%</p> : price > 50000 ? <p style={{color : "grey"}}>Discount of 10% </p>: price > 30000  && price < 50000 ? <p style={{color : "green"}}>Discount of 5%</p> : null}

    </div>
  )

  //this is method 1
  // if(price > 30000 && price < 50000){
  //   return (
  //   <div className="Product">
  //     <h1>{title}</h1>
  //     <h3>Price : {price}</h3>
  //       <p>Discount of 5%</p>
      
  //   </div>
  // );

  // }else if(price > 50000){
  //   return (
  //   <div className="Product">
  //     <h1>{title}</h1>
  //     <h3>Price : {price}</h3>
  //       <p>Discount of 10%</p>
      
  //   </div>
  // );
  // }
  // else{
  //   return (
  //   <div className="Product">
  //     <h1>{title}</h1>
  //     <h3>Price : {price}</h3>
      
  //   </div>
  // );
  // }
}

export default Product;
