const createError = require('http-errors');
const express = require('express');

const mySql = require('mysql2');
const sequelize = require('./dbConnection');

const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const multer = require('multer');
const upload = multer();


const indexRouter = require('./routes/index');

const sync = async () => await sequelize.sync({alter:true})
sync()


const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());


// Allows to send FormData
app.use(upload.array())


app.use('/', indexRouter);


app.listen(3000, () => {
  console.log('server started on port 3000')
})

