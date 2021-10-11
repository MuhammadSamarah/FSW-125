const express = require('express');
const app = express()
const PORT = 9000
const morgan = require("morgan")
app.use(express.json())
app.use(morgan('dev'))
app.use("/bounty", require("./bountyRouter"))
app.use((err,req,res,next)=>{
    console.log(err)
    return res.send({errorMessage:err.errorMessage})
})

app.listen(PORT, () => {
    console.log(`App started on port: ${PORT}`)
}) 