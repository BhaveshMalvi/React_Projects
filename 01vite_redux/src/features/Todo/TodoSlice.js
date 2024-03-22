// step 1
import { createSlice, nanoid } from "@reduxjs/toolkit";

// step 2
const initialState ={
    todos: [{id:1, text: "Hello world"}],
    edit: {id: null, text: null}
}


// reducer is a one type of Functonality
// step 3
export const todoSlice = createSlice({
    // step 4
    name: 'todo',
    initialState,
    reducers: {
        // step 5
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            state.todos = state.todos.map((todo) => {
                if(action.payload.id === todo.id){
                    todo.text = action.payload.text
                }
                return todo
            } )            
            state.edit = {id:null, text:null}
        },
        editTodo: (state, action) => {
            state.edit = action.payload
        }

    }
})

// step 6
export const {addTodo, removeTodo, updateTodo, editTodo} = todoSlice.actions

// step 7
export default todoSlice.reducer


// step 1
/* The line `import { createSlice, nanoid } from "@reduxjs/toolkit";` is importing the `createSlice`
and `nanoid` functions from the `@reduxjs/toolkit` library. */
// step 2
/* The `initialState` constant is defining the initial state of the `todo` slice. It is an object that
contains two properties: `todos` and `edit`. */

// step 3
/* The code `export const todoSlice = createSlice({ ... })` is creating a Redux slice using the
`createSlice` function from the `@reduxjs/toolkit` library. */

// step 4
    /* The code block `name: 'todo', initialState, reducers: { ... }` is defining the name of the Redux
    slice as 'todo', setting the initial state using the `initialState` constant, and defining jo 1 object he. the
    reducers for the slice. */

// step 5
        /* The `addTodo` function is a reducer that is responsible for adding a new todo item to the
        `todos` array in the state. *//* In the code `text: action.payload`, `action.payload` refers to the payload value
                that is passed when the `addTodo` action creator is dispatched. It is the text of
                the new todo item that is being added. */
          /* The `removeTodo` function is a reducer that is responsible for removing a todo item from the
       `todos` array in the state. It takes two parameters: `state` and `action`. */
        /* The `updateTodo` function is a reducer that is responsible for updating a todo item in the
       `todos` array in the state. */
       /* The `editTodo` function is a reducer that is responsible for updating the `edit` property in the
        state. It takes two parameters: `state` and `action`. */

// step 6
/* `export const {addTodo, removeTodo, updateTodo, editTodo} = todoSlice.actions` is exporting the
action creators from the `todoSlice` slice. These action creators can be used to dispatch actions to
modify the state of the `todo` slice. */

// step 7
/* `export default todoSlice.reducer` is exporting the reducer function from the `todoSlice` slice.
This allows the reducer to be imported and used in the Redux store configuration. */
