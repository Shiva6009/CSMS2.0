var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
app.use(cors())

app.use(express.json());  // Read Json
app.use(express.urlencoded({ extended: false }));   // Read Json
app.use(cookieParser());

app.use('/test', indexRouter);
app.use('/users', usersRouter);

app.listen(2000, function(err){
  if (err) console.log("Error in server setup")
  console.log("Server listening on Port", 2000);
})

