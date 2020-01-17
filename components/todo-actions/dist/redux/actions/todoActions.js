"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ADD_TODO = 'ADD_TODO';
exports.UPDATE_TODO = 'UPDATE_TODO';
exports.DELETE_TODO = 'DELETE_TODO';
function addTodo(payload) {
    return {
        type: exports.ADD_TODO,
        payload
    };
}
exports.addTodo = addTodo;
function updateTodo(payload) {
    return {
        type: exports.UPDATE_TODO,
        payload
    };
}
exports.updateTodo = updateTodo;
function deleteTodo(payload) {
    return {
        type: exports.DELETE_TODO,
        payload
    };
}
exports.deleteTodo = deleteTodo;
