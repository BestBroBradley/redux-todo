const currentReducer = (state = {
        title: "",
        date: "",
        memo: ""
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
                memo: ""
            }
            return(state); 
        default:
            return state;
    }
}

export default currentReducer