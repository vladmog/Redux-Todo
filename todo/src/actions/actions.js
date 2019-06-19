export const ADD_TODO = "ADD_TODO";
export const TOGGLE = "TOGGLE";

export const addTodo = (text) => {
    let newTodo = {
        value: text,
        completed: false
    }
    return {
        type: ADD_TODO,
        payload: newTodo
    };
}

export const toggle = () => {
    return {
        type: TOGGLE
    }
}

//++++++++++++++++++++++++++++++++++

// export function addTodo(text){
//     let newTodo = {
//         todo: text,
//         complete: false
//     }
//     return {
//         type: ADD_TODO,
//         payload: newTodo
//     };
// }