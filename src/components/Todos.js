import React from "react"
import TodoItem from "./TodoItem"
import { useSelector } from "react-redux"

const Todos = () => {

    const todos = useSelector(state => (state.todos))

    return (
        <>
            {todos.length === 0 ? <h1 id="notodos">Let's make some to-do items!</h1> : todos.map(todo => {return <TodoItem key={todo.id} props={todo}/>})}
        </>
    )
}

export default Todos