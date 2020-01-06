const express = require('express');
const orderRoute = express.Router();

const Order = require('../model/order.model');

orderRoute.route('/').get(function(req, res){
 Order.find(function(err, data) {
   if(err) {
     console.log(err);
   } else {
     res.json(data);
   }
 });
});

orderRoute.route('/').post(function(req, res) { 
  let order = new Order(req.body);
  
  order
  .save()
  .then(obj => {
    res.status(200).json({ message: 'Order Received Successfully!' });
  })
  .catch(err => {
    res.status(400).json({ message: 'Unable to take the Order' });
  });
});

orderRoute.route('/:id').get(function(req, res) { 
  let id = req.params.id;
  Order.findById({ _id: id }, function(err, data) {
    res.json(data);
  });
});

orderRoute.route('/:username').get(function(req, res) {
  let username = req.params.username;
  Order.find({ username: username }, function(err, data) {
    if (err) {
      throw err;
    }
    else {
      res.json(data);
    }
  });
});

orderRoute.route('/:id').patch(function(req, res) {

});
