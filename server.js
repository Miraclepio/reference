const express=require ('express')

require('dotenv').config();

require("./config/db")
const router=require('./router/router')
const port=process.env.port
const app=express()

app.use(express.json())
app.use("/api/v1",router)

app.listen(port,()=>{
    console.log('my app is listen to port ' + port )
})
