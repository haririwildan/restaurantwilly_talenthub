const express = require('express');
const router = express.Router()
const orderController = require('../controllers/orderController')

// to add order
router.post('/', orderController.addOrder);

// to get order details
router.get('/:id', orderController.getOrderDetails);

// to take all orders
router.get('/', orderController.getAllOrders)

module.exports = router;