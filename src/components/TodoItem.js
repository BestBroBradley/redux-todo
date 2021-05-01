import React from "react"

const TodoItem = (props) => {

console.log(props)

    return (
        <>
            <h2>Title</h2>
            <h3>Sample Title</h3>
            <h2>Due Date</h2>
            <h3>Sample Date</h3>
            <h2>Memo</h2>
            <h3>Sample Memo</h3>
        </>
    )
}

export default TodoItem