import Price from './price'
import './Product.css';



function Amazon({title , idx}) {
  let oldPrices = ['60,000', '70,000', '80,000', '90,000', '1,00,000']
  let newPrices = ['40,000', '50,000', '60,000', '70,000', '80,000']
  let description = [
    ['A13 chip' ,'for gamer'], 
    ['A14 chip', 'special for gamer'] ,
    ['A15 chip', 'cheaper '] , 
    ['A16 chip', 'special for gamer'] , 
    ['A17 chip', 'special for gamer']
  ]
  return (
    <div className='Amazon'> 
      <p>{title}</p>
      <p>{description[idx][0]}</p>
      <p>{description[idx][1]}</p>
      <p>{description[idx][2]}</p>
      <p>{description[idx][3]}</p>
      <p>{description[idx][4]}</p>
      <Price  oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
    </div>
  ) 
}

export default Amazon;