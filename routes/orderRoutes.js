const express = require('express');
const router = express.Router();


const orderController = require('../controllers/orderController');


router.post('/placeOrder', orderController.place_order);
router.get('/getAllOrders', orderController.getAll_Orders);



module.exports = router;
