const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const connectToDb = require('./db/db');
const userRoutes = require('./routes/user.routes')

const app = express();
const PORT = process.env.PORT || 3000
connectToDb();
app.use(cors());
app.use(express.urlencoded({extended:true}))
app.use(express.json());




app.use('/user',userRoutes)



app.listen(PORT,()=>{
    console.log(`server is created at port : ${PORT}`)
})

module.exports = app;