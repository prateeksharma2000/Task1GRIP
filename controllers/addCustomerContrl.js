const Customer = require('../models/customers');

module.exports.create = (req,res) => {
    Customer.create(req.body);
    res.redirect('/');
}

module.exports.display = (req,res) => {
    res.render("addCustomer",{
        title:"Add Customer"
    })
}