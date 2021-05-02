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
        console.log(id)
        dispatch(controlledInput("title", title))
        dispatch(controlledInput("date", date))
        dispatch(controlledInput("memo", memo))
        dispatch(controlledInput("id", id))
    }

    return (
        <div id="todoitem">
            <h2>Item: {title}</h2>
            <h2>Do by: {date}</h2>
            <h2>Notes:</h2>
            <h3>{memo}</h3>
            <button onClick={handleUpdate}>Update Todo</button>
            <button onClick={handleDelete}>Delete Todo</button>
        </div>
    )
}

export default TodoItem