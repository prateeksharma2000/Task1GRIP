const Customer = require("../models/customers");

module.exports.display = async (req,res)=>{
     
    const customers = await Customer.find({});

    res.render("customers",{
        customersList: customers
    })
}