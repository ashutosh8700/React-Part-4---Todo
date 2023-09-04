import { useContext, useState } from "react";
import TodoContext from "../context/TodoContext";

function AddTodo() {
    // Maintain Local State
    const {todos,setTodos} =  useContext(TodoContext);
    const [todoText, setTodoText] = useState('')

    return(
        <>
            <input placeholder="add your next todo.." 
               // Putting the onchange event
               onChange={(e) => setTodoText(e.target.value)}
               value={todoText}
            />
            <button onClick={() => {
                let nextId = todos.length + 1;
                // take all the previous todo and then add id text isFinished
                setTodos([...todos, {id:nextId, text:todoText, isFinished:false } ]);
                setTodoText('');
            }} > Submit </button>
        </>
    )
}

export default AddTodo;