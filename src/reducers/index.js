import { combineReducers } from "redux"
import todoReducer from "./todos"
import { useSelector } from "react-redux"

const rootReducer = combineReducers({
    todos: todoReducer
})

export default rootReducer