const { expenseService } = require('../services');


const Expense = async (req, res) => {
    try{
        const response = await expenseService.Expense(req.body) 
        return res.status(201).json(response)
    }
    catch(err){
        console.log(err)
        res.status(500).send(err);
    }
}

const Expenses = async (req, res) => {
    try{
        const response = await expenseService.Expenses();
        return res.status(201).json(response)
    }catch(err){
        console.log(err)
        res.status(500).send(err)
    }
}



module.exports = {
    Expense,
    Expenses
}