const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    menuId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Menu',
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        min: 1
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
}, { timestamps: true });

// virtual definition for menuDetails
orderSchema.virtual('menuDetails', {
    ref: 'Menu',
    localField: 'menuId',
    foreignField: '_id',
    justOne: true,
})

// include virtuals in json output and objects
orderSchema.set('toJSON', { virtuals: true });
orderSchema.set('toObject', { virtuals: true });

module.exports = mongoose.model('Order', orderSchema);