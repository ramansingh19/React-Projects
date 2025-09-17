import Product from './Product.jsx';

function ProductTab() {
  let info = ['durable' , 'stable' , 'fast']
  let infos = {a : "durable" , b : "stable" ,  c : 'fast'}
  return (
    <>
      <Product title="Phone" price = {52000} feature = {info} feature2 = {infos} feature3 = {['Apple19']}/>
      <Product title="Tab"  />
      <Product title="Laptop" price = {100000}/>
      <Product  price = {90000}/>
    </>
  );
}

export default ProductTab;
