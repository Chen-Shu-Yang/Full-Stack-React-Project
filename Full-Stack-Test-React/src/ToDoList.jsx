import { ToDoItem } from "./ToDoItem"

export function ToDoList({ todos, toggleTodo, deleteTodo }) {
    return (
        <ul className="list">
            {todos.length === 0 && "No Todos"}
            {
                // Use map to loop through the todos array to render out the list

                /*
                
                To modify just one of the items in a list, 
                React will need to use the key to know which item to make the change
                It is a performance optimizer to make the code run faster
      
                */

                todos.map(todo => {
                    return (
                        <ToDoItem id={todo.id} completed={todo.completed} title={todo.title} key={todo.id}
                        toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
                    )
                })
            }
        </ul>
    )
}