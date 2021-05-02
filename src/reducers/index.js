import { combineReducers } from "redux"
import todoReducer from "./todos"
import currentReducer from "./current"

const rootReducer = combineReducers({
    todos: todoReducer,
    current: currentReducer
})

export default rootReducer