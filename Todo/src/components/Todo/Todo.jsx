import { useState } from "react";

function Todo({ finishTodo, editTodo ,deleteTodo ,text,isFinished, }){

    const [isEditing, setIsEditing] = useState(false);
    const [todoText, setTodoText] = useState(text);

    return(
        <div>
            <input type="checkbox" checked={isFinished} onChange={() => finishTodo(!isFinished) } />
            {/* If editing then Input tag else span Tag */}
            { isEditing ? <input value={todoText} onChange={() => setTodoText(e.target.value) } /> : <span> {todoText}  </span> }
            
            <button onClick={() => {
                // If already editing then stop editing or if not editing then start editing
                setIsEditing(!isEditing);
                editTodo(todoText);
                // If editing the todo then show Save else show Edit
            }}>  {isEditing ? 'Save' : 'Edit'  }   </button>
            <button onClick={deleteTodo}> Delete </button>
        </div>
    );
}

export default Todo;