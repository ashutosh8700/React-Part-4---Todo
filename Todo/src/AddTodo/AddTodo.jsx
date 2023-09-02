import { useState } from "react";

function AddTodo({addTodos}) {
    // Maintain Local State
    const [todoText, setTodoText] = useState('')

    return(
        <>
            <input placeholder="add your next todo.." 
               // Putting the onchange event
               onChange={(e) => setTodoText(e.target.value)}
               value={todoText}
            />
            <button onClick={() => {
                addTodos(todoText);
                setTodoText('');
            }} > Submit </button>
        </>
    )
}

export default AddTodo;