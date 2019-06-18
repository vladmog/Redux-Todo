import {ADD_TODO} from '../actions/actions'

let defaultState = {
    todos: [
      {
        value: 'Walk the dog.',
        completed: true
      },
      {
        value: 'Walk the cat.',
        completed: false
      }
    ]
}

export default (state = defaultState, action) => {
    switch (action.type){
        case ADD_TODO:
            let newTodos = [...state.todos, action.payload]
            return {todos: newTodos};
        default: 
            return state;
    }
}