import { createContext, useContext } from "react";

//use to create Context
export const TodoContext = createContext({
  todos : [
    {
      id : 1,
      todo : 'Todo msg',
      Completed : false,
    }
  ],
  addTodo : (todo) => {},
  deleteTodo : (id) => {},
  updateTodo : (todo , id) => {},
  toggleTodo : (id) => {}
})

//hooks use to anyWhere to inherit the value of TodoContext
export const useTodo = () => {
    return useContext(TodoContext)
}

//this is provider use for data 
export const TodoProvider = TodoContext.Provider