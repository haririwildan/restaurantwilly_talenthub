const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    menuId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Menu',
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    customerName: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: 'Pending',
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Order', orderSchema);