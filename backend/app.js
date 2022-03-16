
const express = require('express')
const app = express();
const mongoose = require('mongoose')
const routes = require('./routes')

const port = 3000

mongoose.connect('mongodb://root:example@localhost:27017/')
var db = mongoose.connection

db.on('error', console.error.bind(console, 'mongo db connection error:'))
app.use(function (request, response, next) {
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PATCH, DELETE");
  response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/', routes);


app.listen(port, function(){
    console.log(`server on port: ${port}`)
})