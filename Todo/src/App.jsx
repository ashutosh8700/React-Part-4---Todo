

import { useState } from 'react'
import AddTodo from './AddTodo/AddTodo'
import './App.css'
import TodoList from './components/TodoList/TodoList'

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

  function addTodos(todoText){
      // Destructure the todos
      let nextId  = todos.length + 1;
      setTodos([ ...todos, {id:nextId, isFinished: false, text: todoText } ])
  }

  return (
    <>  
        <AddTodo addTodos={addTodos}/>
        <TodoList todos = {todos} />
        
    </>
  )
}

export default App
