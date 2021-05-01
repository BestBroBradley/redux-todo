import React from "react"

const NewTodo = () => {

    return (
        <>
            <h2>Add a new todo:</h2>
            <h4>Todo Title:</h4>
            <input name="title" />
            <h4>Due Date:</h4>
            <input name="date" />
            <h4>Todo Memos:</h4>
            <input name="memo" />
        </>
    )
}

export default NewTodo