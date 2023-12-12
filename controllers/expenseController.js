// import model
const Expense = require("../models/expense")
const User = require("../models/user")


var GET_EXPENSES = (req, res) => {
    // render dashboard.ejs file
    // res.render("dashboard.ejs")
    Expense.find({})
        .then((foundItems) => {
            if (foundItems.length > 0) {
                console.log("items => ", foundItems.reverse())
                res.render("dashboard.ejs", {
                    data: foundItems.reverse()
                })
            } else {
                res.render("dashboard.ejs", {
                    data: "No Expenses Found"
                })
            }
        })
        .catch(err => {
            console.log(err)
        })

}

var GET_ADD_EXPENSES = (req, res) => {
    res.render("addExpense")
}

var POST_ADD_EXPENSES = (req, res) => {
    const name = req.body.name;
    const amount = req.body.amount;
    const category = req.body.category;

    const expense = new Expense({
        name,
        amount,
        category
    })

    expense.save()
        .then((createdExpense) => {
            console.log(createdExpense)
            res.redirect("/")
        })
        .catch((err) => {
            console.log(err)
        })

}

const DELETE_EXPENSE = (req, res) => {

    const id = req.params.id
    Expense.findByIdAndDelete(id)
        .then(expense => {
            console.log("Got deleted", expense)
            res.redirect("/")
        })
        .catch(err => {
            console.log("error occurred", err)
        })

}


const GET_CATEGORY_ITEMS = (req, res) => {
    var selected_category = req.params.category

    var filter = selected_category ? { category: selected_category } : {}

    Expense.find(filter)
        .then((foundItems) => {
            if (foundItems.length > 0) {
                console.log("items => ", foundItems.reverse())
                res.render("dashboard.ejs", {
                    data: foundItems.reverse()
                })
            } else {
                res.render("dashboard.ejs", {
                    data: "No Expenses Found"
                })
            }
        })
        .catch(err => {
            console.log(err)
            res.send(err)
        })

}




module.exports = {
    GET_EXPENSES,
    GET_ADD_EXPENSES,
    POST_ADD_EXPENSES,
    DELETE_EXPENSE,
    GET_CATEGORY_ITEMS,
}