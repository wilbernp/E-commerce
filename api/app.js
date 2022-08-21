const express = require("express")

const app = express()


app.get("/",(req, res)=>{
    res.send({msg:"servidor funcionando"})
})
module.exports={app}