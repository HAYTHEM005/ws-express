const express = require('express')
const logger= require("./middleweare/logger")
const app = express()
app.use(logger )
//app.get('/hi',(req,res)=>{
  //  res.send("hello")
//})

const port= 5000;
app.use(express.static(__dirname+ "/public"))
app.use(express.json())

app.listen(port, (err)=>{
      err? console.log(err)
: console.log(`server is running on port ${port}`)
})