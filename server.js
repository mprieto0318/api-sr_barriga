const express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  cors = require('cors');

  port = process.env.PORT || 3000;


// const mysql = require('mysql');
// // connection configurations
// const mc = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'sr_barriga'
// });
 
// // connect to database
// mc.connect(); 

app.listen(port);

console.log('API server started on: ' + port);

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./app/routes/approutes'); //importing route
routes(app); //register the route

var routes = require('./app/routes/clientroutes'); //importing route
routes(app); //register the route