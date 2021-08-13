const mongoose = require('mongoose');

const customer_schema = new mongoose.Schema({
    name:{
       type: String,
       required:true,
    },
    email:{
        type: String,
        required: true
    },
    balance:{
         type: Number,
         required:true
    }
});

const Customer = mongoose.model("Customer",customer_schema);
module.exports = Customer;
