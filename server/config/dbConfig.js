const mongoose = require('mongoose');

mongoose.connect(process.env.mongo_url);
// now connect mongodb through mongoose client
const connection = mongoose.connection;

connection.on('connected', ()=>{
    console.log('MongoDB connection successfull');
})

connection.on('error',()=>{
    console.log('MongoDB connection failed');
})

module.exports = connection;