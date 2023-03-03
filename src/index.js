const express = require('express');
const dotenv = require('dotenv')
dotenv.config()

const route = require('./routes/route.js');
const app = express();
app.use(express.json());
const mysql=require('mysql2')

app.use('/', route)
const db = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
  }).promise()
  
app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
module.exports.db=db
