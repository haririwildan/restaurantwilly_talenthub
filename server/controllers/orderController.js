const Order = require('../models/orderModel');

// add order
const addOrder = async (req, res) => {
    try {
        const { menuId, quantity, customerName } = req.body;
        const order = new Order({ menuId, quantity, customerName });
        await order.save();

        // retrieve the details of orders that have been populated
        const populatedOrder = await Order.findById(order._id).populate('menuDetails');

        console.log('Populated Order:', populatedOrder);

        res.status(201).json({ message: 'Order created successfully', order: populatedOrder });
    } catch (err) {
        console.error('Error in addOrder:', err);
        res.status(500).json({ message: 'Failed to create order', error: err });
    }
}

// function to get order details
const getOrderDetails = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id).populate('menuDetails');
        res.json(order);
    } catch (err) {
        res.status(500).send('Server Error');
    }
}

module.exports = {
    addOrder,
    getOrderDetails,
}