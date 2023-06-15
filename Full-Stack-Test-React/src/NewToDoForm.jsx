import { useState } from "react"

// Props contain information passed to this component
// In this case, passing the "addTodo" function
// Old fashion way is just using props as the arg later, use props.[prop name]
// Better way is destructing it like below and later, use the prop name directly| Eg. {prop name} 
export function NewToDoForm({ addTodo }) {
    const [newItem, setNewItem] = useState("");
    function handleSubmit(e) {
        e.preventDefault();

        /*
    
        Setting states in React, the value is equals to
        whatever we render on our last render
        In this case, todos by default is an empty array 
        
        setTodos([...todos, {
          id: crypto.randomUUID(), title: newItem, completed: false
        },
        ])
        
    
        When setTodos is called again, todos is still an empty array
        The first setTodos will not matter since the second setTodos will overwrite everything
    
        setTodos([...todos, {
          id: crypto.randomUUID(), title: newItem, completed: false
        },
        ])
    
        */


        /* 
    
        To modify the existing data, you need to pass a function,
        and the function will return whatever value you want
        the new state to be. The function will take whatever the value of
        the current state as the argument
    
        Anytime you want to pass a current value of a state, make sure to pass a function.
        If not, you can just pass the value "e.target.value"
    
        */
        // setTodos((currentTodos) => {
        //     return [...currentTodos, {
        //         id: crypto.randomUUID(), title: newItem, completed: false
        //     },
        //     ]
        // })

        // Checks if newItem is an empty string
        if (newItem === "") return

        /**
         * Old Fashion Method
         * --------------------------------------------------------------
         * To use the information passed to this compoent using "props",
         * in this case "addTodo" function, syntax should be "props."
         * followed by the name of the props
         * E.g. props.addTodo(arg) === addTodo(newItem)
         * 
         * Better Method
         * -------------------------------------------------------------------
         * Destructure the props as shown above and use the prop name directly
         * Eg. addTodo(newItem)
         */
        addTodo(newItem)
        
        // Clears the input bar after adding an item
        setNewItem("")
    }

    return (
        <form onSubmit={handleSubmit} className="new-item-form">
            <div className="form-row">
                <label htmlFor="item">New Item</label>
                <input type="text" id="item" value={newItem}
                    // Event handlers have to take in an event object "e"
                    // e.target.value -> Gets the value of the input
                    // If no event handlers, the value will not updated
                    // Input is blank in this case since newItem is ""
                    onChange={e => setNewItem(e.target.value)}
                />
            </div>
            <button className="btn">Add</button>
        </form>
    )
}