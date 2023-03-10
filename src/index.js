const express = require('express')
const app = express()
const  mongoose  = require('mongoose')

const route = require('./routes/route')


app.use(express.json())
mongoose.set('strictQuery', true)

mongoose.connect("mongodb+srv://Vinay1997:Z4AKcP40EXSsGdcj@vinay.0stv4ut.mongodb.net/Vaccine-data?retryWrites=true&w=majority",
{useNewUrlParser:true})

.then( () => console.log("MongoDB is connected"))
.catch( (err) => console.log(err.message))

app.use('/', route)

app.listen(3000, function(){
    console.log("Express app is running on port 3000")
})