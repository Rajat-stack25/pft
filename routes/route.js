const { GET_EXPENSES,
    GET_ADD_EXPENSES,
    POST_ADD_EXPENSES, DELETE_EXPENSE, GET_CATEGORY_ITEMS
     } = require("../controllers/expenseController")

     const {GET_SIGNUP, POST_SIGNUP,GET_LOGIN, POST_LOGIN} = require("../controllers/UserController")
// require router from express

// app - 1
// const express = require("express")
// const router = express.Router()

// app - 2 
const router = require("express").Router()

router.get("/", GET_EXPENSES)
router.get("/add", GET_ADD_EXPENSES)
router.post("/add", POST_ADD_EXPENSES)


// route to handle delete
router.get("/delete/:id", DELETE_EXPENSE)


// get items as per category
router.get("/category/:category?", GET_CATEGORY_ITEMS)



router.get("/signup", GET_SIGNUP)
router.post("/signup", POST_SIGNUP)

router.get("/login", GET_LOGIN)
router.post("/login", POST_LOGIN)



// post request for "/add"
// read and console the text from the form

// export router to be used in app.js
module.exports = router