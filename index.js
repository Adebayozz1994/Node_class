// console.log("hello class");

const ejs = require("ejs")
const express = require("express")
const app = express()
const PORT = 5000
const mongoose = require("mongoose")
const uri = "mongodb+srv://Adebayozz:Peterzz1994@cluster0.72sjynx.mongodb.net/?retryWrites=true&w=majority"


//  connet your mongooss to Node.js
mongoose.connect(uri)
.then((response)=>{
    console.log("connected to database successfully");
})
.catch((err)=>{
    console.log(err);
    console.log("There is an error in the database");
})

//  schema is use to structure the database collection
let studentSchema = mongoose.Schema({
    name:String,
    email:{type: String, required:true, unique:true},
    password:{type:String, required:true, unique:true}
})

const studentModel = mongoose.model("students", studentSchema)



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
    let student = new studentModel(req.body)
    student.save()
})

app.listen(PORT, (err)=>{
    if(err){
        console.log("i can't run on port + PORT");
    }else{
        console.log("i am running on port 5000");
    }
});
  