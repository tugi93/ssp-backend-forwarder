'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _expressHttpProxy = require('express-http-proxy');

var _expressHttpProxy2 = _interopRequireDefault(_expressHttpProxy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
app.use('/', (0, _expressHttpProxy2.default)('http://10.10.120.10:1337/'));
app.listen(4000, '0.0.0.0');