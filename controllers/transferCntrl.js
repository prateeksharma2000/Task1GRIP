const Customer = require("../models/customers");
const Transaction = require("../models/transactions");

module.exports.display = async (req, res) => {

    try {
        const customers = await Customer.find({_id:{ $ne : req.params.id}});

        return res.render("transfer", {
            customerList: customers,
            id: req.params.id
        })
    }
    catch (err) {
        console.log("error ", err);
    }
}

module.exports.transfer = async (req, res) => {
    try {
        //check if both customers are not same
        if (req.body.fromCustomer !== req.body.toCustomer) {
            const fromCustomer = await Customer.findById(req.body.fromCustomer);
            const toCustomer = await Customer.findById(req.body.toCustomer);
            const transferAmount = Number(req.body.transferAmount);

            if (fromCustomer.balance >= transferAmount) {
                let newBalance1 = fromCustomer.balance - transferAmount;
                let newBalance2 = fromCustomer.balance + transferAmount;

                await Customer.findByIdAndUpdate(req.body.fromCustomer, { "balance": newBalance1 });
                await Customer.findByIdAndUpdate(req.body.toCustomer, { "balance": newBalance2 });
                
                Transaction.create({
                    "to":req.body.toCustomer,
                    "from":req.body.fromCustomer,
                    "amount":transferAmount
                })
                req.flash('success',"Transaction Successful");
                return res.redirect("/customers");
            }
            else{
                req.flash('error',"Insufficient Balance");
                return res.redirect("back");
            }
        }else{
            req.flash('error',"Kindly Select Different Accounts");
            return res.redirect("back");
        }
    } catch (err) {
        console.log("error ", err);
    }
}
