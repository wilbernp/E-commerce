const express = require("express")
const morgan = require("morgan")

const routes = require("./src/routes/index.routes")
const app = express()

// middlewares
app.use(express.json())
app.use(morgan("dev"))

app.use("/api", routes)
app.get("/",(req, res)=>{
    res.send({msg:"servidor funcionando"})
})
module.exports={app}