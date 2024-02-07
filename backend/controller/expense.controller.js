const { expenseService } = require('../services');





const expense = async (req, res) => {
    try{
        const response = await expenseService.expense(req) 
        return res.status(201).json(response)
    }
    catch(err){
        console.log(err)
        res.status(500).send(err);
    }
} 

const expensess = async (req, res) => {
    try{
        const response = await expenseService.expensess(req);
        return res.status(201).json(response)
    }catch(err){
        console.log(err)
        res.status(500).send(err)
    }
}


// const netBalance = async (req, res) => {
//     try{
//         const response = await expenseService.Balance(req.body);
//         return res.status(201).json(response)
//     }catch(err){
//         console.log(err)
//         res.status(500).send(err)
//     }
// }



module.exports = {
    expense,
    expensess,
    // netBalance
}