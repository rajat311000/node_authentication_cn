const mongoose = require('mongoose');

require('dotenv').config();

mongoose.connect('mongodb+srv://rajatjain3276:vBa4F4NCwz6cenkr@cluster0.ds38blz.mongodb.net/?retryWrites=true&w=majority');

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));


db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});


module.exports = db;