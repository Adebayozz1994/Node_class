// console.log("hello class");

const ejs = require("ejs")
const express = require("express")
const app = express()
const PORT = 5000




app.set("view engine", "ejs")
app.use( express.static("public"))
app.use(express.urlencoded({extended:true}))

let users = [
    {
        name:"adebayo",
        email:"adebayo@gmail.com",
        password:"123456"
    },
    {
        name:"adebayo",
        email:"adebayo@gmail.com",
        password:"123456"
    }
]


app.get("/", (req, res)=>{
    // res.send("Hello Node")
    // console.log("I am working");
    res.render("index", {name:"adebayo"})
})

app.get("/welcome", (req, res)=>{
    res.render("welcome");
})
app.get("/navbar", (req, res)=>{
    res.render("navBar",{users:users});
})
app.get("/signup", (req, res)=>{
    res.render("signUp");
    console.log(req.body);
})
app.get("/login", (req, res)=>{
    res.sendFile(__dirname + "/login.html");
})
app.post("/register",(req, res)=>{
    console.log(req.body);
    users.push(req.body)
    console.log(users);
    res.redirect("/navBar")
})

app.listen(PORT, (err)=>{
    if(err){
        console.log("i can't run on port + PORT");
    }else{
        console.log("i am running on port 5000");
    }
})