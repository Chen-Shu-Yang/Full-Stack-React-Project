import { useEffect, useState } from "react"
import { NewToDoForm } from "./NewToDoForm";
import "./styles.css"
import { ToDoList } from "./ToDoList";

export default function App() {
  /**
   * React always follows some type of structures
   * Hook (useState/useEffect) -> Some function logics -> return jsx
   */
  
  // Default value can be a string, number, array, function, etc
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue === null) return []

    return JSON.parse(localValue)
  })

  // Does not return anything, but takes a function as an argument
  // Run this function whenever the objects inside the array changes
  // useEffect must be called above all functions and must not be within an IF statement
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  // Cannot do this as it will reload the entire component and cause an infinite loop
  // setNewItem("Update Something")

  // Event handlers for inputs can use:
  // onChange -> Launches on blur or when change to the input value is stopped
  // onInput -> Launches on every single change to input value

  function addTodo(title) {
    setTodos((currentTodos) => {
        return [...currentTodos, {
            id: crypto.randomUUID(), title, completed: false
        },
        ]
    })
  }

  function toggleTodo(id, completed) {
    
    // Current Todo value is used. Hence, need to use function version
    setTodos(currentTodos => {
      // Loop through the currentTodos Array which is created when a todo item is added
      return currentTodos.map(todo => {
        // Check if the item to toggle is the right one
        // Id checked against the id of the items in the currentTodos list
        if (todo.id === id) {
          // Anytime changing state, need to make sure you are not mutating
          // But instead, creating a new state object
          return { ...todo, completed }
        }

        // If does not match, just return the original
        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      // "filter" will include everything in an array except the one that I want to remove
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <>
      {
        /**
         * Props -> Allows you to pass information down to custom components
         * "ClassNames", "Checked", "onChange", etc are props that you can pass to html elements
         * Props name can be anything, Better to be the name of the function for convenience
         */
      }
      <NewToDoForm addTodo={addTodo} />
      <h1 className="header">Todo List</h1>  
      <ToDoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}  />
    </>
  )
}