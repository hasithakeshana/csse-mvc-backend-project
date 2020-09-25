const express = require('express');
const router = express.Router();


const managerController = require('../controllers/orderRequestsController');

router.post('/addOrderRequest', managerController.add_order_requests);

router.get('/getAllOrders', managerController.getAll_Order_Requests);


module.exports = router;







module.exports = router;