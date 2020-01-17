"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todoActions_1 = require("../actions/todoActions");
const objectUtils_1 = require("../../utils/objectUtils");
const initialState = {
    todos: []
};
function default_1(state = initialState, action) {
    switch (action.type) {
        case todoActions_1.ADD_TODO:
            return Object.assign(Object.assign({}, state), { todos: [...state.todos, action.payload] });
        case todoActions_1.UPDATE_TODO:
            return Object.assign(Object.assign({}, state), { todos: objectUtils_1.updateObjectInArray(state.todos, action.payload) });
        case todoActions_1.DELETE_TODO:
            return Object.assign(Object.assign({}, state), { todos: objectUtils_1.deleteObjectInArray(state.todos, action.payload) });
        default:
            return state;
    }
}
exports.default = default_1;
