require("dotenv").config()
const mongoose = require("mongoose")

const {app} = require("./app")

const PORT = process.env.PORT || 3001
app.listen(PORT, async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("listening at port ",PORT)
    } catch (error) {
        
    }
})