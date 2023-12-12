const mongoose = require("mongoose");


const expenseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 3
    },
    amount: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model("expense",expenseSchema);