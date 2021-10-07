let initialState = {
    todos: []
};

export default function reducer(state = initialState, action) {
    let temp;
    switch (action.type) {
        case "ADD_TODO":
            temp = { ...state };
            temp.todos.push(action.payload.todo);
            return temp;
        case "TOGGLE_TODO":
            temp = { ...state };
            temp.todos = temp.todos.map(item => {
                if (item.id === action.payload.id) return { ...item, completed: !item.completed }
                return item;
            });
            return temp;
        case "DELETE_TODO":
            temp = { ...state };
            temp.todos = temp.todos.filter(item => item.id !== action.payload.id);
            return temp;
        default:
            return state;
    }
}