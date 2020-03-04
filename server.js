const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")

app.use(express.json())
app.use(morgan('dev'))

mongoose.connect('mongodb://localhost:27017/bountydb', 
{
useNewUrlParser: true,
useUnifiedTopology: true,
useCreateIndex: true,
useFindAndModify: false
},
() => console.log("connected to db")
)

app.use("/bounty", require("../routes/bountyRouter"))

app.listen(9000, () => {
    console.log("running port " + 9000)
})

