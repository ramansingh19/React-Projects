import React from "react";
import UserContext from "./UserContext";

//In React, children is a special prop that represents whatever you wrap inside a component when you use it.
const UserContextProvider = ({children}) => {
  const [user , setuser ] = React.useState(null)

  return (
    <UserContext.Provider value= {{user , setuser}}>
    {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider;


//--> this is first way to create UserContext provider