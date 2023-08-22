const express = require('express');  
const app = express();
const session = require("express-session"); 

app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false
}));

app.use(express.urlencoded({ extended: true }));

require("dotenv").config();

const morgan=require("morgan")
app.use(morgan("combined"))

const helmet=require("helmet")
app.use(helmet())


app.post("/login",(req,res)=>{
    if(req.body.username=="user1" && req.body.password=="pass")
    {
        req.session.username=req.body.username;
        req.session.loggedin=true;
        res.status(200).send("Auth Successfully logged in")
    }
    else
    res.status(401).send("Not Authorized")
})

function validate_session(req, res, next) 
{
    if(req.session.loggedin==true)
    {
        next()
    }   
    else
    return res.status(401).send("Not Authorized")
}


const BookRoute=require("./routes/BookRoute")
app.use("/books",validate_session,BookRoute)

// IN CONFIG/DB.JS

// const mongoose = require('mongoose');
// mongoose.connect('mongodb://0.0.0.0:27017/db1' );
// const db = mongoose.connection;
// //mongoose.set('useFindAndModify', false);

// db.on('error', console.error.bind(console, 'connection error:'));



// IN models/Book.JS
// //SCHEMA
// const BookSchema = mongoose.Schema({
//     name: String,
//     price: Number,
//     quantity: Number
//   });
// const Book = mongoose.model('Book', BookSchema, "books"); //MODEL


app.listen(8000);