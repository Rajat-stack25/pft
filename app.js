// imports / requires
const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
// import router from the route.js file
const router = require("./routes/route")

// constants
const PORT = 3000

var URL = `mongodb+srv://baldiatarun12:helloworld123@cluster0.wcjuvcu.mongodb.net/expenseDB`
mongoose.connect(URL)
    .then(() => {
        console.log("Conncted to DB")
        // server setup

        app.listen(PORT, () => {
            console.log("Sever started on Port : ", PORT)
        })

    })
    .catch(err => {
        console.log(err)
    })
// custom middleware
// app.use((req,res,next)=>{
//     console.log("hello im in the custom middleware");


//     console.log(req.path);
//     console.log(req.url);
//     next()
// })

// middleware

// ejs
app.set("view engine", "ejs")
// bodyparser
app.use(bodyParser.urlencoded({ extended: true }))
// static files 
app.use(express.static("public"))


app.use(router)
