const createError = require('http-errors');
const express = require('express');
const mySql = require('mysql');

const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const multer = require('multer');
const upload = multer();


const indexRouter = require('./routes/index');

// Create connection
const db = mySql.createConnection({
  host:'127.0.0.1',
  user: 'root',
  password: 'testtest'
});

// Connect 
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('mySQL connected')
})


const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());


// Allows to send FormData
app.use(upload.array())


app.use('/', indexRouter);

app.get('/createDB', (req, res) => {
  let sql = "CREATE DATABASE nodemysql";
  db.query(sql, (err, result) => {
    if(err) {throw err}
    console.log(result)
    res.send('Database Created...')
  })
})

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

app.listen(3000, () => {
  console.log('server started on port 3000')
})

