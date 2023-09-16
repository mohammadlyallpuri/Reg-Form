const express = require('express');
const app = express();
const port= 3000;
const mongoose = require('mongoose')
const registrationapi = require("./routes/Registration")

app.set('view engine', 'ejs');
app.use(express.static(__dirname+'/public'));
app.use(express.json())


app.use("/register",registrationapi);



//mongodb+srv://mohammadweex21:<password>@cluster0.7vod0my.mongodb.net/?retryWrites=true&w=majority

mongoose.connect('mongodb+srv://mohammadweex21:yWLnU2es3w4q0gvE@cluster0.7vod0my.mongodb.net/registration?retryWrites=true&w=majority').then((res)=>{
    console.log("Database is Connected!")
}).catch((err)=>{
    console.log(err.message)
})

app.get("/",function(req,res){
    res.render(__dirname+"/views/index.ejs")
})


app.listen(port , ()=>{
    console.log(`Server is running.....`)
})