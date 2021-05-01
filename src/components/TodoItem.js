import React from "react"
import { useDispatch } from "react-redux"
import { remove } from "../actions"

const TodoItem = (props) => {

    const { title, date, memo } = props.props

    const dispatch = useDispatch()

    const handleDelete = () => {
        console.log(title)
        dispatch(remove(title))
    }

    return (
        <>
            <h2>Title</h2>
            <h3>{title}</h3>
            <h2>Due Date</h2>
            <h3>{date}</h3>
            <h2>Memo</h2>
            <h3>{memo}</h3>
            <button onClick={handleDelete}>Delete Todo</button>
        </>
    )
}

export default TodoItem