require('dotenv').config()
require('./Config/db')
const express = require('express')
const cors = require('cors')


const app = express();

app.use(express.json({extended:true}));
app.use(express.urlencoded({extended: true}));
app.use(cors())
app.use('/', require('./Routes'))

app.listen(process.env.PORT, function(){
    console.clear()
    console.log(`Server Listening on PORT ${process.env.PORT}`)
})