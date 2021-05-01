import React from "react"
import { useDispatch } from "react-redux"
import { remove } from "../actions"

const TodoItem = (props) => {

    const { title, date, memo } = props.props

    const dispatch = useDispatch()

    const handleDelete = () => {
        dispatch(remove(title))
    }

    return (
        <div id="todoitem">
            <h2>Item: {title}</h2>
    <h2>Do by: {date}</h2>
            <h2>Notes:</h2>
            <h3>{memo}</h3>
            <button onClick={handleDelete}>Delete Todo</button>
        </div>
    )
}

export default TodoItem