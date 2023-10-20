// step 1
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, editTodo } from '../features/Todo/TodoSlice'

// step 2
function Todos() {
    // step 4
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

    // step 4
  return (
    <>
    <div>Todos</div>
    <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            <div className='text-white'>{todo.text}</div>
            <div>
            <button
                className="text-white bg-blue-500 border-0 py-1 px-5  mx-5 focus:outline-none hover:bg-blue-600 rounded text-md"
                onClick={() => dispatch(editTodo({id: todo.id, text: todo.text}))}
            >
                Update
            </button>

            <button
             onClick={() => dispatch(removeTodo(todo.id))}
              className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
            >
              Remove
            </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}

// step 3
export default Todos



// step 1
/* This code is importing the necessary dependencies and actions for managing the Todo component. */
/* The code `import { useSelector, useDispatch } from 'react-redux'` is importing the `useSelector` and
`useDispatch` hooks from the `react-redux` library. These hooks are used to access the Redux store
and dispatch actions. */
/* The code `import { removeTodo, editTodo } from '../features/Todo/TodoSlice'` is importing the
`removeTodo` and `editTodo` functions from the `TodoSlice` file located in the `../features/Todo`
directory. These functions are likely Redux actions that are used to update the state of the `todos`
in the Redux store. */

// step 2
/* The `Todos` function is a React component that renders a list of todos. */

// step 3
/* `export default Todos` is exporting the `Todos` component as the default export of the module. This
allows other modules to import and use the `Todos` component in their code. */

   // step 4
    /* `const todos = useSelector(state => state.todos)` is using the `useSelector` hook from the
    `react-redux` library to access the `todos` state from the Redux store. It takes a callback
    function as an argument, which receives the entire Redux state as its parameter. In this case,
    it is extracting the `todos` property from the state object. */
      /* `const dispatch = useDispatch()` is using the `useDispatch` hook from the `react-redux` library
    to get a reference to the `dispatch` function. The `dispatch` function is used to dispatch
    actions to the Redux store. In this code, it is used to dispatch the `removeTodo` and `editTodo`
    actions when the corresponding buttons are clicked. */