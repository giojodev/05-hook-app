
const initialState = [{
    id: 1,
    todo:'Comprar pan',
    done: false
}
];

const todoReducer = (state = initialState,action = {}) => {


    if(action?.type === 'add todo'){
        return [...state,action.payload];
    }

    return state;
}

let todos = todoReducer();

const newTodo = {
    id: 2,
    todo:'Comprar leche',
    done: false
}

const addTodoAtion = {
    type: 'add todo',
    payload: newTodo
}
todos = todoReducer(todos,addTodoAtion);
console.log(todos);