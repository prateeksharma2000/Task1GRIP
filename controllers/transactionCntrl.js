const Transaction = require("../models/transactions");

module.exports.display = async (req,res) => {
    try {
        const transactions = await Transaction.find({}).populate("to from");
        
        return res.render("transaction",{
            transactionList : transactions
        })

    } catch (error) {
        console.log("error ",err);
    }
}