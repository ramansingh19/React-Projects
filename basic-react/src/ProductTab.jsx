// ProductTab.jsx
import Product from './Product.jsx';

function ProductTab() {
  
  return (
    <>
      <Product title="Phone" price={52000} />
      
      <Product title="Tab" price={22000}/>
      
      <Product title="Laptop" price={120000} />
      
      <Product title="TV" price={40000} />
    </>
  );
}

export default ProductTab;
