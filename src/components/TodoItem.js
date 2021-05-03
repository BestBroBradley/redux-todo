import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { remove, controlledInput } from "../actions"

const TodoItem = (props) => {

    const { title, date, memo, id } = props.props

    const dispatch = useDispatch()

    const handleDelete = () => {
        dispatch(remove(id))
    }

    const handleUpdate = () => {
        dispatch(controlledInput("title", title))
        dispatch(controlledInput("date", date))
        dispatch(controlledInput("memo", memo))
        dispatch(controlledInput("id", id))
    }

    return (
        <div id="todoitem">
            <h2 id="todotitle">{title}</h2>
            <h3 className="TodoDetails">Do by: {date}</h3>
            <h3 className="TodoDetails">Notes:</h3>
            <p>{memo}</p>
            <button onClick={handleUpdate}>Update Todo</button>
            <button onClick={handleDelete}>Delete Todo</button>
        </div>
    )
}

export default TodoItem