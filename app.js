const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');

mongoose.connect('mongodb://localhost:27017/node-vue-tutorial', {
    useNewUrlParser: true
}).then(db => console.log("DB is connected")).catch(err => console.log(err));

app.use(cors());

app.use('/', require('./routes/articleRoutes'));

app.listen(3000, function () {
    console.log("server its work")
});