var express = require('express');
var interfaces = require('./interfaces/cash_client');

var app = express();

//setup template engine
app.set('view engine', 'ejs');

//start the programs
interfaces(app);

//listening to port
app.listen(3000);

