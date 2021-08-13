const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://prateek:prateek2000@cluster0.ixwxz.mongodb.net/bankingdevelopment?retryWrites=true&w=majority',{ useNewUrlParser: true,useUnifiedTopology: true });
// 'mongodb://localhost/banking_development'
const db = mongoose.connection;

db.on('error',console.error.bind(console,"Error connecting to MongoDB"));

db.once('open',function(){
    console.log('connected to database');
})

module.exports = db;
