const bcrypt = require('bcryptjs')
const Users = require('../Model/User');
require('dotenv').config()
 
const signup = async (payload) => {
    const { name, email, password} = payload;
    console.log(payload)
    let existingUser
    try { 
        existingUser = await Users.findOne({ email: email });
        if (existingUser)  throw "User already exists! Login instead"
            // return res.status(400).json({ message: "User already exists! Login instead" });

    } catch (err) {
        console.log(err) 
    } 
     
 
    const hashedPassword = bcrypt.hashSync(password)

    const user = new Users({
        name,
        email, 
        password: hashedPassword
    });
    try {
        user.save();
        return user
    }
    catch (err) {
        console.log(err)
    }
 
    
}

const login = async (  req, res) => {
    const {email, password} = req.body;
    console.log("sed....",req.body)

    let existingUser;
    // let token
    // const existingUser
    try{
       existingUser  = await Users.findOne({email: email})
       console.log(existingUser)
       if(!existingUser) {
            throw new Error("User not found. Signup Please!")
        }
       
        const isPasswordCorrect =  await bcrypt.compare(password, existingUser.password);
        console.log(isPasswordCorrect)
        if(!isPasswordCorrect) {
            console.log("nkwek")
            throw new Error("Invalid Email / Password")
       }
        // token = jwt.sign({id: existingUser._id}, process.env.JWT_KEY, {
        //     expiresIn: "35s"
        // });
        
    //    res.cookie(String(existingUser._id), token, {
    //         path: '/',
    //         expires: new Date(Date.now() + 1000 * 30),
    //         httpOnly: true,
    //         // sameSite: 'lax'
    //     });
        return {message: "Successfully Logged In", user: existingUser}
    }catch(err) {
        return new Error(err);
    }
   
}

const getUser = async() => {
    try{
        const response = await Users.findOne({})
        return response
    }
    catch(err){
        console.log(err)

    }
}



module.exports = {
    signup,
    login,
    getUser
}