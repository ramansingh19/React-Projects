import React from 'react'

function Map() {
  const fruits = ["apple" , "bnana", "mango"]
  return (
    <div>
      {fruits.map((fruits) => {
          console.log({fruits});
      })}
    </div>
  )
}

export default Map;
// The map() function is used to iterate over an array and return JSX elements so that lists of data can be rendered dynamically in React.
