import React, { useState } from "react"

const NewTodo = () => {

    const [ state, setState ] = useState({
        title: "",
        date: "",
        memo: ""
    })

    const handleChange = (event) => {
        const { name, value } = event.target
        setState({...state, [name]: value})
    }

    return (
        <>
            <h2>Add a new todo:</h2>
            <h4>Todo Title:</h4>
            <input name="title" onChange={handleChange}/>
            <h4>Due Date:</h4>
            <input name="date" onChange={handleChange}/>
            <h4>Todo Memos:</h4>
            <input name="memo" onChange={handleChange}/>
        </>
    )
}

export default NewTodo