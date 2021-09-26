const express = require('express')
const todoServer = express.Router()
const {v4: uuidv4} = require('uuid')

    const todos =[
{
    name: "Danny",
    description: "run a mile",
    complete: true,
     _id: uuidv4()
},
{
    name: "james",
    description: "find medication",
    complete: false,
    _id: uuidv4()
},
{
    name: "bobby",
    description: "take out trash",
    complete: false,
    _id: uuidv4()
}
]

todoServer.route('/').get((req, res)=>{
    res.send(todos)
})

todoServer.route('/').post((req, res)=>{
    const newTodo = req.body
    newTodo._id = uuidv4()
    todos.push(newTodo)
    res.send('new todo added')
})

todoServer.route('/:todoId').delete( (req, res) =>{
    const todoId = req.params.todoId
    const todoIndex = todos.findIndex(todo => todo._id === todoId)
    res.send('Resource successfully deleted')
    todos.splice(todoIndex, 1)   
})

todoServer.route('/:todoId').get((req,res)=>{
    const todoId = req.params.todoId
    const todoFinder = todos.find(todo => todo._id === todoId)
    res.send(todoFinder)
})

todoServer.route('/:todoId').put((req, res)=>{
    const todoId = req.params.todoId
    const todoIndex = todos.findIndex(todo => todo._id === todoId)
    const updateTodo = Object.assign(todos[todoIndex], req.body)
    res.send(updateTodo)
})
    module.exports = todoServer;