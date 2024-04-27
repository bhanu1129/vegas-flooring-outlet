var express = require('express')
var cors = require('cors')
var app = express()
var bodyParser = require('body-parser')
var connection = require('./connections/Mongo');
var Contact = require('./models/Contact')

connection();
 
app.use(cors({
 origin: ["https://vegas-flooring-outlet.vercel.app"],
 methods: ["POST", "GET"],
 credentials: true
}))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
 
app.post('/contact', async function (req, res, next) {
    const {firstName, lastName, phone, email, message} = req.body;

    try{
        await Contact.create({firstName, lastName, phone, email, message});
        res.status(201).json({message:"Message sent"})
    }
    catch(err){
        console.log(err);
    }
})

app.listen(4000, function () {
  console.log('Web server listening on port 4000')
})
