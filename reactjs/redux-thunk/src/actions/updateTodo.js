import axios from "axios";

import { UPDATE_TODO_FAILURE, UPDATE_TODO_STARTED, UPDATE_TODO_SUCCESS } from "./types";

export const updateTodo = (todo) => {
    return dispatch => {
        dispatch(updateTodoStarted())

        todo = {
            id: todo.id,
            title: todo.title,
            completed: !todo.completed
        };

        axios.put(`https://jsonplaceholder.typicode.com/todos/1`, todo).then(res => {
            setTimeout(() => dispatch(updateTodoSuccess(todo)), 2500);
        }).catch(err => {
            setTimeout(() => dispatch(updateTodoFailure(err.message)), 2500);
        })
    }
}

const updateTodoSuccess = todo => ({
    type: UPDATE_TODO_SUCCESS,
    payload: { ...todo }
});

const updateTodoStarted = () => ({
    type: UPDATE_TODO_STARTED
});

const updateTodoFailure = error => ({
    type: UPDATE_TODO_FAILURE,
    payload: { error }
});