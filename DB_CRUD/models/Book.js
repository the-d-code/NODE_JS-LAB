const mongoose=require("../config/db")

//SCHEMA
const BookSchema = mongoose.Schema({
    name: String,
    price: Number,
    quantity: Number
  });
const Book = mongoose.model('Book', BookSchema, "books"); //MODEL
module.exports=Book;