import { createStore } from "redux";
import reducer from "../redux/reducer";

export const st = createStore(reducer)

//  const reducer = (state = 0, action) => {
//     switch(action.type){
//         case 'INCREMENT' : return state + 1;
//         case 'DECREMENT' : return state - 1 ; 
//         default : return state
//     }
// }
