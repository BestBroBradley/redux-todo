import { cloneNode } from "@babel/types";

const todoReducer = (state = [
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
], action) => {
    switch (action.type) {
        case "ADD":
            console.log(action.payload.state)
            return(state.concat(action.payload.state));
        case "REMOVE":
            return state;
        default:
            return state;
    }
}

export default todoReducer