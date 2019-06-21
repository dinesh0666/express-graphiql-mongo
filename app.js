const express = require('express');
const graphqlHttp = require('express-graphql');
const app  = express();
const schema = require('./schema/schema');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/demo');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log("DB connected");
});



app.use("/graphql",graphqlHttp({
    schema,
    graphiql:true
}));

app.listen(4000,()=>{
console.log("Server Started on  port 4000")
});