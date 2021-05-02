const currentReducer = (state = {
        title: "",
        date: "",
        memo: "",
        id: 0
    }, action) => {
    switch (action.type) {
        case "CONTROL":
            state = {
                ...state,
                [action.field]: action.update
            }
            return(state);
        case "UPDATE":
            return(state);
        case "CLEAR":
            state = {
                title: "",
                date: "",
                memo: "",
                id: 0
            }
            return(state); 
        default:
            return state;
    }
}

export default currentReducer