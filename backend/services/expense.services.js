const Expenses = require('../Model/Expenses');
const moment = require('moment')

const expense = async (req) => {
    const {id} = req.params
    console.log(id)
    const {selection, name, category, type, amount} = req.body
    
    const currentTime = moment().format("DD/MM/YYYY HH:mm:ss")


    const expense = new Expenses({
        selection,
        name,
        category,
        type,
        amount,
        date: currentTime,
        userId: id
    });

    try{
        expense.save();
        return expense
    }
    catch (err) {
        console.log(err)
    } 

   
}


const expensess = async (req) => {
    const {id} = req.params
    try{
        const response = await Expenses.find({userId: id}).exec()
        return response;
    }
    catch(err){
        console.log(err)
    }
}


module.exports = {
    expense,
    expensess,

}