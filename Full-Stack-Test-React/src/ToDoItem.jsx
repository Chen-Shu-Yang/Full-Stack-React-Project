export function ToDoItem({ completed, id, title, toggleTodo, deleteTodo }) {
    return (
        <li>
            <label>
                <input type="checkbox" checked={completed} onChange={e => toggleTodo(id, e.target.checked)} />
                {title}
            </label>
            <button className="btn btn-danger"
                onClick={
                    // If event object is not used, can just call the function directly
                    /**
                     * Function Arrow is important *** () => ***
                     * With " () => ", its passing a function
                     * Without, its passing the result of the function which in this case is delete
                    */
                    () => deleteTodo(id)
                }>Delete</button>
        </li>
    )
}