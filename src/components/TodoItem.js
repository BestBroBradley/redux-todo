import React from "react"

const TodoItem = (props) => {

console.log(props.props)

const { title, date, memo } = props.props

    return (
        <>
            <h2>Title</h2>
            <h3>{title}</h3>
            <h2>Due Date</h2>
            <h3>{date}</h3>
            <h2>Memo</h2>
            <h3>{memo}</h3>
        </>
    )
}

export default TodoItem