//This imports express
const express = require('express');
//use dotenv to expose our environment variables
require('dotenv').config();
//we create a new instance of express as the app object
const app = express();
//PORT assignment
const PORT = process.env.PORT;

//router handler that will define uri/url that does something
app.get('/home', (req, res) =>{
   res.send('Hello, World!');
});

//router handler that contains a path parameter
app.post('/user/:id', (req, res) =>{
    const user_id = req.params.id;
    res.send(`The user id is: ${user_id}`);
});

//router handler for query parameters
app.get('/search', (req, res)=>{
    const query = req.query.q;
    res.send(`This is the search term entered: ${query}`);
});

//start our server
app.listen(PORT, () =>{
    console.log(`Server started on port: ${PORT}`);
});


