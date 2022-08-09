import axios from "axios";

import { GET_TODOS_FAILURE, GET_TODOS_STARTED, GET_TODOS_SUCCESS } from "./types";

export const getTodos = () => {
    return dispatch => {
        dispatch(getTodosStarted())

        axios.get(`https://jsonplaceholder.typicode.com/todos`).then(res => {
            setTimeout(() => dispatch(getTodosSuccess(res.data)), 2500);
        }).catch(err => {
            setTimeout(() => dispatch(getTodosFailure(err.message)), 2500);
        })
    }
}

const getTodosSuccess = todo => ({
    type: GET_TODOS_SUCCESS,
    payload: { ...todo }
});

const getTodosStarted = () => ({
    type: GET_TODOS_STARTED
});

const getTodosFailure = error => ({
    type: GET_TODOS_FAILURE,
    payload: { error }
});