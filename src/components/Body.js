import Todos from "./Todos"
import NewTodo from "./NewTodo"

const Body = () => {

    return (
        <div className="Body">
            <div id="newtodo">
                <NewTodo />
            </div>
            <div id="todos">
                <Todos />
            </div>
        </div>
    )
}

export default Body