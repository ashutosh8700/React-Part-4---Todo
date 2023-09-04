

import { useEffect, useState } from 'react'
import AddTodo from './AddTodo/AddTodo'
import './App.css'
import TodoList from './components/TodoList/TodoList'

import TodoContext from './context/TodoContext'

function App() {
  // dummy todo List
  const [todos, setTodos] =  useState([
    {
      id: 1,
      text: 'todo 1',
      isFinished: true
    },
    {
      id: 2,
      text: 'todo 2',
      isFinished: false
    },
  ]);

  // function addTodos(todoText){
  //     // Destructure the todos
  //     let nextId  = todos.length + 1;
  //     setTodos([ ...todos, {id:nextId, isFinished: false, text: todoText } ])
  // }

  // useEffect(() => {
  //   console.log(todos);
  // } )

  return (
    <>  
      {/* component inside the TodoContext.Provider will have have access to TodoContext in value we can pass all the variables and state variables */}
      {/* todos and set todos will be provided to both */}
      <TodoContext.Provider value={{todos, setTodos}} >
         <AddTodo  />
         <TodoList  />
      </TodoContext.Provider>
    </>
  )
}

export default App
