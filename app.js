const express = require('express');
const { engine } = require('express/lib/application');
const mongoose = require('mongoose');

const app = express();

//connection to mongodb
mongoose.connect("mongodb://localhost/todo_express",{
    useNewUrlParser:true,
    useUnifiedTopology: true
}); 



//moddlewares
app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"));

//routes
app.use(require("./routes/index"))
app.use(require("./routes/todo"))


//Server create
app.listen(3000,()=>{
    console.log("Server is running on port number 3000");
})