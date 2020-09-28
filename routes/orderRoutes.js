const express = require('express');
const router = express.Router();


const orderController = require('../controllers/orderController');


router.post('/placeOrder', orderController.place_order);


module.exports = router;
