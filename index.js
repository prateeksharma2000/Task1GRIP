const express  = require('express');
const session = require('express-session');
const cookieParser = require("cookie-parser");
const flash = require('connect-flash');
const connectMware = require("./config/middleware");
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT||5000;
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');


app.use(cookieParser());

app.use(express.static("./assets"));
app.use(express.urlencoded({ extended: true }));
app.use(expressLayouts);
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);
app.set('views', './views');
app.set('view engine', 'ejs');

app.use(session({
    secret:'banking',
    saveUninitialized: true,
    resave: true
}));
 

app.use(flash());

app.use(connectMware.setFlash);

app.use('/',require('./routes/index.js'));


app.listen(port,(err)=>{
    if(err) console.log('error connecting server')
    console.log(`server up at ${port}`);
});
