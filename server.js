const express = require('express');
const app = express();
const config = require('./config/DB');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const PORT = 3000;


// body parser will receive post data from front end
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// set global promise for mongoose
mongoose.Promise = global.Promise;

// db connection
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  res => {
    console.log('Database Successfully Connected');
  },
  res => {
    console.log(err);
  }
);
app.use(cors());

const proRoute = require('./router/product.router');
app.use('/product/api', proRoute);

app.listen(PORT, function () {
  console.log(`Server is running on url http://localhost:${PORT}`);
});