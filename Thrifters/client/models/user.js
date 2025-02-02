const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema=new Schema({
    name:{
        type:String,
        required:true,
    },
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true
    },
    phoneNo:{
        type:Number,
        required:true
    },
    orders: [{
        product_id: {
            type: Schema.Types.ObjectId,
            ref: 'Product',
            required: true
        },
        seller_id: {
            type: Schema.Types.ObjectId,
            ref: 'User',
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
        }
    }]
});

module.exports = mongoose.model('User', UserSchema);