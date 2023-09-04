import { useContext } from "react";
import Todo from "../Todo/Todo";
import TodoContext from "../../context/TodoContext";
function TodoList(){

    const {todos,setTodos} = useContext(TodoContext);

    // Approach is to display all the todos other than that id todo
    // check id whose id is different than the given id
    function onDeleteTodo(id){
        const newTodoList = todos.filter(todo => todo.id !== id );
        setTodos(newTodoList);
    }

    function onEditTodo(id, newTodo){
        const newTodoList = todos.map(todo => {
            if(todo.id == id){
                todo.text = newTodo;
            }

            return todo;
        });

        setTodos(newTodoList)
    }

    function onFinishTodo(id, state){
        const newTodoList = todos.map(todo => {
            if(todo.id == id){
                todo.isFinished = state;
            }

            return todo;
        });

        setTodos(newTodoList)
    }

    return(
        <>
            { todos && todos.map((todo) => <Todo 
            key={todo.id}
            text={todo.text} 
            id={todo.id} 
            isFinished = {todo.isFinished}
            editTodo={(newTodo) => onEditTodo(todo.id,newTodo) }
            // Calling a call back function on deleteTodo
            deleteTodo={() => onDeleteTodo(todo.id) } 
            finishTodo = {(state) => onFinishTodo(todo.id, state) }
            /> )} 
            
        </>
    );
}

export default TodoList;