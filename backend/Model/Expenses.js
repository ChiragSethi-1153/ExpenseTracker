const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema({
    
    selection: {
        type: Number,
        required: true
    },
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
    },
    date: {
        type: String,
        required: true
    },
    userId: { 
        type: String,
        // required: true
    },
    netBalance: {
        type: String,
        // required: true
    }
    
    
});


const Expenses = mongoose.model('Expense', expenseSchema);

module.exports = Expenses;

