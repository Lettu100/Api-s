const todoModel = require('../models/todoModel');

function addTodo(request, respond){}

function getAllTodo(request, respond){
    respond.send('Hello get all todo contoller')
}

function updateById(request, respond){}

function deleteById(request, respond){}

module.exports = {
    addTodo,
    getAllTodo,
    updateById,
    deleteById
}