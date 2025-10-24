import { createSlice , nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos : [{
    id : 1,
    text : 'Raman ',
    
  }]
}

export const todoSlice = createSlice({
  name : 'todo',
  initialState,
  reducers : {
    addTodo : (state , action) => {
      const todoNew = {
        id : nanoid(),
        text : action.payload,  // or action.payload.text if you send an object ,, the data you send along with an action.
        
      }
      state.todos.push(todoNew);
      
    },

    //An action is simply a plain JavaScript object that tells Redux what happened —
    // and sometimes carries extra data (payload) about it.

    deleteTodo : (state , action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload )
    },

//     updateTodo : (state , action) => {
//       const {id , newtext} = action.payload //this has a access of text 
//       const todo = state.todos.find(todo => todo.id === id) // case true 4
//       if (todo) {
//         todo.text = newtext //updated text print
//       }
//     },

  //   toggleTodo : (state , action) => {
  //       const todo = state.todos.find(todo => todo.id === action.payload)
  //       if(todo){
  //         todo.completed =  !todo.completed
  //       }
  //   }
  }
})


export const {addTodo , deleteTodo , updateTodo , toggleTodo} = todoSlice.actions

export default todoSlice.reducer