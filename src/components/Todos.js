import React from "react"
import TodoItem from "./TodoItem"

const Todos = () => {

    const todos = [
        {
            title: "Buy catfood",
            date: "5/30/2021",
            memo: "Don't buy beef food!"
        },
        {
            title: "Return book to library",
            date: "4/30/2021",
            memo: "Overdue!!"
        }
    ]

    return (
        <>
            {todos.map(todo => {<TodoItem/>})}
        </>
    )

}

export default Todos