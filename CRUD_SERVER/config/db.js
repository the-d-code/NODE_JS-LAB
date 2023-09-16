const mongoose = require('mongoose');

mongoose.connect(process.env.DBURL);
const db = mongoose.connection;

//mongoose.set('useFindAndModify', false);

db.on('error', console.error.bind(console, 'connection error:'));
module.exports=mongoose