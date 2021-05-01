export const add = (todo) => {
    return{
        type: "ADD",
        payload: todo
    }
};

export const remove = () => {
    return {
        type: "REMOVE"
    }
};