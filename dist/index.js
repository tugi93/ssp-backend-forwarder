var express = require('express');
var proxy = require('express-http-proxy');

var app = express();
app.use('/', proxy('http://10.10.120.10:1337/'));
app.listen(4000, '0.0.0.0');