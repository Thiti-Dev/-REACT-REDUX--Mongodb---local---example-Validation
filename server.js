const express = require('express');
const mongoose = require('mongoose');


const app = express();

// Body parser middleware
//@@  ใช้ body-parser ในการอ่าน body ของ request พูดง่ายๆคือ อ่าน ค่า POST
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//predefined port
//@@ กำหนดพอร์ท
const port = 5000;

//Connecting to the database
//@@ เชือม ฐ ข้อมูล local
mongoose
    .connect('mongodb://localhost/playGround', { useNewUrlParser: true, useFindAndModify: false })
    .then(() => {
        console.log("MongoDB Connected")
    })
    .catch(err => {
        console.log(err)
    })

app.get("/", (req,res) => {
    res.send("This is the default page")
})

//Load route
const test = require('./routes/api/test')

//Use Routes
app.use('/api/test', test);

app.listen(port, () => {
    console.log(`Server currently running on ${port}`)
})