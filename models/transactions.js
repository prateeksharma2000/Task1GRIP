const mongoose = require('mongoose');
const Customer = require("./customers");

const transaction_schema = new mongoose.Schema({

    to:{
        type: mongoose.Schema.Types.ObjectId,
        ref: Customer,
        required: true
    },
    from:{
        type: mongoose.Schema.Types.ObjectId,
        ref: Customer,
        required: true
    },
    amount:{
        type:Number,
        required: true
    }
},{timestamps:true});

const Transaction = mongoose.model("Transaction",transaction_schema);
module.exports = Transaction;
