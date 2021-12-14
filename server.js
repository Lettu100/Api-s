const express = require('express');
const { verbose } = require('nodemon/lib/config/defaults');
const app = express();


// importing mongoose
const mongoose = require('mongoose');

// importing todo controller
const todoController = require('./controllers/todoController')



app.get('/', todoController.getAllTodo); 



app.post('/', (request,response)=>{
    response.send("Hello this is a a post method");
}); 

app.put('/', (request,response)=>{
    response.send("Hello this is a a put method");
});

app.get('/todos', (request,response)=>{
    response.send([{
        'title': 'Plan a trip',
        'description':'I will be going to nezulezu',
        'time':'Today',
        'isCompleted':false
    }]);
    
});

app.get('/users', (request,response)=>{
    response.send([{
        'username': 'Joshua Maponga',
        //'description':'I will be going to nezulezu',
        //'time':'Today',
        'password':'password'
    }]);
    
});
// a method has 
// i)route
//ii)callback


// Extensions
// thunder clients


// node verbs
// app.get
// app.post
// app.put
// app.delete


//Packages
//i) express
//ii)
app.listen(3000,()=>{
    console.log("My server is up and runnning on port 3000")
    // connecting to database
    mongoose.connect('mongodb+srv://wise:101078034@cluster0.mywlk.mongodb.net/todo_db?retryWrites=true&w=majority')
    .then(function(){
        console.log("Database is connected");
    })
    .catch(function(error){
        console.log(`Database not connected ${error}`);
    })
});


