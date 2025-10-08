import { useEffect , useState } from "react";


//Custom hook
function useCurrencyInfo(currency) {
  //this is use to hold data , {} is this empty so if no data come from the source then is do not show any error 

  let [data , setData] = useState({})
  useEffect(() => {
    fetch(`https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`)
    .then((res) => res.json())
    //holding the data ,[currency] is use to know which currency you want 
    .then((res) => setData(res[currency]))
    console.log(data);
    
  }, [currency])
  console.log(data);
  return data
}

//this is use to return whole method 
export default useCurrencyInfo;