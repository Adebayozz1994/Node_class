// console.log("hello class");

const ejs = require("ejs")
const express = require("express")
const app = express()
const PORT = 5000




app.set("view engine", "ejs")
app.use( express.static("public"))


app.get("/", (req, res)=>{
    // res.send("Hello Node")
    // console.log("I am working");
    res.render("index", {name:"adebayo"})
})

app.get("/welcome", (req, res)=>{
    res.render("index");
})
app.get("/navbar", (req, res)=>{
    res.render("navBar");
})
app.get("/signup", (req, res)=>{
    res.render("signUp");
})
app.get("/login", (req, res)=>{
    res.sendFile(__dirname + "/login.html");
})


app.listen(PORT, (err)=>{
    if(err){
        console.log("i can't run on port + PORT");
    }else{
        console.log("i am running on port 5000");
    }
})