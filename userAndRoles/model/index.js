const mongoose = require('mongoose');
const userSchema = require('./schema');

const userModel = mongoose.model("user",userSchema);

module.exports = userModel;