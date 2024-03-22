// step 1
import {configureStore} from '@reduxjs/toolkit'
// step 3
import todoReducer from '../features/Todo/TodoSlice'

// step 2
export  const store = configureStore({
    reducer: todoReducer  // step 4
})

// step 1
/* The line `import {configureStore} from '@reduxjs/toolkit'` is importing the `configureStore`
function from the `@reduxjs/toolkit` package. This function is used to create a Redux store with a
set of default middleware and configuration options. */

// step 2
/* The code `export const store = configureStore({ reducer: todoReducer })` is creating a Redux store
using the `configureStore` function from the `@reduxjs/toolkit` package. The `configureStore`
function takes an object as an argument, with the `reducer` property specifying the reducer function
to be used for managing the state of the application. In this case, the `todoReducer` function is
being used as the reducer. The created store is then exported as `store` using the `export` keyword,
making it accessible to other parts of the application. */

// step 3
/* The line `import todoReducer from '../features/Todo/TodoSlice'` is importing the `todoReducer`
function from the `../features/Todo/TodoSlice` file. This `todoReducer` function is responsible for
defining the state and handling actions related to the Todo feature in the application. */

// step 4
/* The `reducer: todoReducer` line is specifying the reducer function to be used for managing the
state of the application in the Redux store. In this case, the `todoReducer` function is being
used as the reducer. The reducer function is responsible for defining the initial state of the
application and handling actions that modify the state. */
