// step 1
import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from'react-redux'
import {addTodo, updateTodo} from '../features/Todo/TodoSlice'

0// step 2
function AddTodo() {
    // step 4
    const [input, setInput] = useState('')
    const dispatch = useDispatch()
    const editTodo = useSelector(state => state.edit)

    // step 5
    const addTodoHandler = (e) => {
      e.preventDefault()
      editTodo.id === null ? dispatch(addTodo(input)) : dispatch(updateTodo({id:editTodo.id, text: input}))
      setInput('')
  }

  // step 6
  useEffect(() => {  
      setInput(editTodo.text)
  }, [editTodo])

  // step 4
  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        {editTodo.id === null ? "Add Todo" : "Update Todo"}
      </button>
    </form>
  )
}

// step 3
export default AddTodo


// step 1
/* This code is importing necessary dependencies and functions from various libraries and files. */


// step 2
/**
 * This is a React component that renders a form for adding or updating a todo item. */

// step 3
/* `export default AddTodo` is exporting the `AddTodo` component as the default export of the file.
This allows other files to import and use the `AddTodo` component by importing it using the `import`
statement. */

 // step 4
   /* The code is using the `useState` hook to create a state variable called `input` and a function
   called `setInput` to update the value of `input`. The initial value of `input` is an empty
   string. */
   /* `const dispatch = useDispatch()` is using the `useDispatch` hook from the `react-redux` library
    to get a reference to the dispatch function. The dispatch function is used to dispatch actions
    to the Redux store. */
     /* `const editTodo = useSelector(state => state.edit)` is using the `useSelector` hook from the
    `react-redux` library to select the `edit` state from the Redux store. It is assigning the value
    of the `edit` state to the `editTodo` variable. */

    // step 5
   /**
    * The addTodoHandler function is used to add or update a todo item based on the value of the
    * editTodo variable.
    */
   /* The code `e.preventDefault()` is preventing the default form submission behavior, which is to
      refresh the page. */
       /* The code `editTodo.id === null ? dispatch(addTodo(input)) :
      dispatch(updateTodo({id:editTodo.id, text: input}))` is a conditional statement that checks if
      the `editTodo.id` is null. */
      /* `setInput('')` is a function call that sets the value of the `input` state variable to an
      empty string. This is used to clear the input field after a todo item is added or updated. */

// step 6
  /* The `useEffect` hook is used to perform side effects in a React component. In this case, the
  `useEffect` hook is used to update the value of the `input` state variable whenever the `editTodo`
  state changes. */
  /* `setInput(editTodo.text)` is updating the value of the `input` state variable with the value
      of `editTodo.text`. This is done in the `useEffect` hook, which runs whenever the `editTodo`
      state changes. */