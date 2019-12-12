import express from 'express';
import proxy from 'express-http-proxy';

const app = express();
app.use('/', proxy('http://10.10.120.10:1337/'));
app.listen(4000, '0.0.0.0');