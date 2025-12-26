import { useEffect, useState } from 'react'
// import './App.css'
import { TodoProvider } from './TodoContext'
import TodoForm from './TodoForm'
import TodoItem from './TodoItem'


function Todo() {
  const [todos , setTodos ] = useState([])

  //this is use for add todo list
  const addTodo = (todo) => {
    setTodos((prev) => [{id : Date.now() , ...todo} , ...prev])
  }

  //this is use for updating todos list 
  const updateTodo = (id , todo) => {
    setTodos((prev) => prev.map((prevToDo) => (prevToDo.id === id ? todo : prevToDo)))
  }

  //this is for delete the todo 
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((PrevTodo) =>  PrevTodo.id !== id))
  }

  //this is use for toogle the todo 
  //in this i have face issue like naming convention use only camelCase 
  const toggleTodo = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? {...prevTodo , 
      completed : !prevTodo.completed} : prevTodo))
  }

  //LocalStorage concepts Set/get
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos'))

    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])
  
  //this is use to set the item 
  useEffect(() => {
    localStorage.setItem('todos' , JSON.stringify(todos))
  } , [todos])

  return (
    <TodoProvider value={{todos , addTodo , deleteTodo , toggleTodo , updateTodo}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-3xl mx-auto shadow-md rounded-lg px-4 py-6 text-white">
                    <h1 className="text-4xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */}
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                          <div key={todo.id} className='w-full'>
                              <TodoItem  todo={todo}/>
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default Todo
