const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const mongoose = require("mongoose");
require('dotenv').config();
const url=process.env.url;
const userRouter = require('./routes/user');
 



app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(userRouter);
app.use(bodyParser.json());







mongoose.connect(url,{
    
})
.then(() => {
        app.listen(3000, () => console.log('listeing'));
    })
    .catch(err => console.log(err));