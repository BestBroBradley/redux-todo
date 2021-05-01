import React from "react"
import TodoItem from "./TodoItem"
import { useSelector } from "react-redux"

const Todos = () => {

    const todos = useSelector(state => (state.todos))

    return (
        <>
            {todos.map(todo => {return <TodoItem key={todo.title} props={todo}/>})}
        </>
    )
}

export default Todos