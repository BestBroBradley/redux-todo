export const add = (todo) => {
    return{
        type: "ADD",
        payload: todo
    }
};

export const remove = (title) => {
    return {
        type: "REMOVE",
        payload: title
    }
};