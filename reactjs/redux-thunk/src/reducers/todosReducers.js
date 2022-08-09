import {
    ADD_TODO_FAILURE,
    ADD_TODO_STARTED,
    ADD_TODO_SUCCESS,
    DELETE_TODO_FAILURE,
    DELETE_TODO_STARTED,
    DELETE_TODO_SUCCESS,
    GET_TODOS_FAILURE,
    GET_TODOS_STARTED,
    GET_TODOS_SUCCESS,
    UPDATE_TODO_FAILURE,
    UPDATE_TODO_STARTED,
    UPDATE_TODO_SUCCESS,
} from "../actions/types";

const initialState = {
    loading: false,
    todos: [],
    error: null,
};

export default function todosReducer(state = initialState, action) {
    switch (action.type) {
        case GET_TODOS_STARTED:
            return {
                ...state,
                loading: true,
            };
        case GET_TODOS_SUCCESS:
            return {
                ...state,
                loading: false,
            };
        case GET_TODOS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
            };
        case ADD_TODO_STARTED:
            return {
                ...state,
                loading: true,
            };
        case ADD_TODO_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                todos: [...state.todos, action.payload],
            };
        case ADD_TODO_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
            };
        case UPDATE_TODO_STARTED:
            return {
                ...state,
                loading: true,
            };
        case UPDATE_TODO_SUCCESS:
            const updateCopy = [...state.todos];
            const updateIndex = updateCopy.findIndex((obj => obj.id === action.payload.id));
            updateCopy.splice(updateIndex, 1, action.payload);
            return {
                loading: false,
                error: null,
                todos: [...updateCopy],
            };
        case UPDATE_TODO_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
            };
        case DELETE_TODO_STARTED:
            return {
                ...state,
                loading: true,
            };
        case DELETE_TODO_SUCCESS:
            const deleteCopy = [...state.todos];
            const deleteIndex = deleteCopy.findIndex((obj => obj.id === action.payload.id));
            deleteCopy.splice(deleteIndex, 1);
            return {
                loading: false,
                error: null,
                todos: [...deleteCopy],
            };
        case DELETE_TODO_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
            };
        default:
            return { ...state };
    }
}