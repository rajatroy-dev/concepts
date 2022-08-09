import axios from "axios";
import { v4 as uuidv4 } from 'uuid';

import { ADD_TODO_FAILURE, ADD_TODO_STARTED, ADD_TODO_SUCCESS } from "./types";

export const addTodo = (todo) => {
    return dispatch => {
        dispatch(addTodoStarted())
        todo = {
            id: uuidv4(),
            title: todo.title,
            completed: false,
        }
        axios.post(`https://jsonplaceholder.typicode.com/todos`, todo).then(res => {
            setTimeout(() => dispatch(addTodoSuccess(todo)), 2500);
        }).catch(err => {
            setTimeout(() => dispatch(addTodoFailure(err.message)), 2500);
        })
    }
}

const addTodoSuccess = todo => ({
    type: ADD_TODO_SUCCESS,
    payload: { ...todo }
});

const addTodoStarted = () => ({
    type: ADD_TODO_STARTED
});

const addTodoFailure = error => ({
    type: ADD_TODO_FAILURE,
    payload: { error }
});