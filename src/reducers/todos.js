const todoReducer = (state = [
    {
        title: "Buy catfood",
        date: "5/30/2021",
        memo: "Don't buy beef food!",
        id: 1
    },
    {
        title: "Return book to library",
        date: "4/30/2021",
        memo: "Overdue!!",
        id: 2
    }
], action) => {
    switch (action.type) {
        case "ADD":
            switch (action.payload.id) {
                case 0:
                    const newPayload = {...action.payload, id: Date.now()}
                    console.log(newPayload)
                    return(state.concat(newPayload))
                default:
                    console.log(action.payload.id)
                    break;
            }
        case "REMOVE":
            const newState = state.filter(todo => todo.id !== action.payload)
            return newState;
        default:
            return state;
    }
}

export default todoReducer