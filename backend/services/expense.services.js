const Expenses = require('../Model/Expenses');


const Expense = (payload) => {
    const {name, category, type, amount} = payload
    const expense = new Expense({
        name,
        category,
        type,
        amount
    });
    try{
        expense.save();
        return expense
    }
    catch (err) {
        console.log(err)
    }

   
}


const Expenses = async () => {
    try{
        const response = await Expenses.findOne({})
        return response;
    }
    catch(err){
        console.log(err)
    }
}


module.exports = {
    Expense,
    Expenses
}