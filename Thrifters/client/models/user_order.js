const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const user_orderSchema = new Schema({
    product_id: {
        type: Schema.Types.ObjectId,
        ref: 'Product',  // References the Product model
        required: true
    },
    seller_id: {
        type: Schema.Types.ObjectId,
        ref: 'User',    // References the User model (seller)
        required: true
    },
    buyer_id: {
        type: Schema.Types.ObjectId,
        ref: 'User',    // References the User model (buyer)
        required: true
    },
    order_date: {
        type: Date,
        default: Date.now,
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'confirmed', 'shipped', 'delivered'],
        default: 'pending'
    },
    quantity: {
        type: Number,
        required: true,
        default: 1
    },
    total_price: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('UserOrder', user_orderSchema);


/*  1.i need to take the product id from the seller side
    import it from the seller side
    2.need the date in which it is ordered
    3.an jsx template to show the products as listed
    4.we need to save seller_id 
 */