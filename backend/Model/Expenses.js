const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema({
    
    name: {
        type: String, 
        required: true
    },
    category: {
        type: String,
        required: true
    },
    type: {
       type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    }
    // user: {
    //     type: String,
    //     required: true
    // },
    
    
});

const Expenses = mongoose.model('Expense', expenseSchema);

module.exports = Expenses;

