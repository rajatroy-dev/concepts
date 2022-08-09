import axios from "axios";

import { DELETE_TODO_FAILURE, DELETE_TODO_STARTED, DELETE_TODO_SUCCESS } from "./types";

export const deleteTodo = (todo) => {
    return dispatch => {
        dispatch(deleteTodoStarted())

        axios.delete(`https://jsonplaceholder.typicode.com/todos/1`).then(res => {
            setTimeout(() => dispatch(deleteTodoSuccess(todo)), 2500);
        }).catch(err => {
            setTimeout(() => dispatch(deleteTodoFailure(err.message)), 2500);
        })
    }
}

const deleteTodoSuccess = todo => ({
    type: DELETE_TODO_SUCCESS,
    payload: { ...todo }
});

const deleteTodoStarted = () => ({
    type: DELETE_TODO_STARTED
});

const deleteTodoFailure = error => ({
    type: DELETE_TODO_FAILURE,
    payload: { error }
});