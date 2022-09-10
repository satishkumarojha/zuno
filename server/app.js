const express = require('express');
const app = express();
const errorMiddleware = require("./middlewares/error");
app.use(express.json());

// Route Imports
const books = require("./routes/books.router");
const user = require("./routes/user.router");

app.get("",(req,res)=>{
    res.status(200).send("Welcome to zuno");
})
app.use("/books",books);
app.use("/user",user);
// error middleware
app.use(errorMiddleware);
module.exports =app;