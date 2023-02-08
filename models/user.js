const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: String
});

module.exports.userModel = mongoose.model('User', userSchema);