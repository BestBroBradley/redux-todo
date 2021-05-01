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
            return state.append(action.payload);
        case "REMOVE":
            return state;
        default:
            return state;
    }
}

export default todoReducer