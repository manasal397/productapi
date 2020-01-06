const express = require('express');
const app = express();
const orderRoute = require('./order.router');
const productRoute = require('./product.router');
app.use('/', productRoute);
app.use('/order', orderRoute);

module.exports = app;
