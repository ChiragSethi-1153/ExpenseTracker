
const { userService } = require('../services');
require('dotenv').config();

const signup = async (req, res, next) => {
    try{
        const response = await userService.signup(req.body);
        return res.status(201).json(response)
    } catch (err) {
        console.log(err)
        res.status(500).send(err);
    }   
}

const login = async (req, res, next) => {

    try{
        const response = await userService.login(req, res);

        return res.status(200).json({response})
    } catch(err){
        // console.log(err)
       return res.status(500).json({error: err.message});
    }
    
}

const getUser = async (req,res) => {
    try{
        const response = await userService.getUser();
        return res.status(200).json({response})
    }
    catch(err){
    return res.status(500).json({error: err.message})
}}


module.exports =  {
    signup,
    login,
    getUser
}