const Order = require('../models/orderModel');

// add order
const addOrder = async (req, res) => {
    try {
        const { menuId, quantity, customerName } = req.body;
        const order = new Order({ menuId, quantity, customerName });
        await order.save();
        res.status(201).json({ message: 'Order created successfully', order });
    } catch (err) {
        res.status(500).json({ message: 'Failed to create order', err });
    }
}

module.exports = {
    addOrder,
}