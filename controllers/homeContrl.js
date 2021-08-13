const Customer = require("../models/customers");

module.exports.home = (req,res)=>{
    return res.render('home',{
        title: "home"
    })
}