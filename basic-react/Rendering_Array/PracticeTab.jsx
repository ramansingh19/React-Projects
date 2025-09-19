import Practice from './Practice.jsx';

function PracticeTab(){
  //let arr = [<li>Raman</li> , <li>Aman</li>]
  let arr = ['Raman' , 'Aman']
  // let object = { a : 'rahul' , b : 'Vinay'}

  return (
    <>
    <Practice feature = {arr}
    // feature2 = {{a : 'Aman' , b : 'Raman'}}
    // feature4 = {['Samosa' , 'Milk']}--> u can declare this also
    // feature3 = {object}
    />
    </>
  )
}

export default PracticeTab;