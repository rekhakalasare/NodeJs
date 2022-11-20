const mongoose = require('mongoose');

const url = "mongodb://localhost:27017/admin";
const options = {};
function getMongoConnection(){
mongoose.connect(url,options,(err)=>{
    if(err) console.error("error!");
    else console.log('connected!');
});
}

module.exports = getMongoConnection;