const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    phone_number: {
        type: Number,
        maxlength: 10
    },
    userName: {
        type: String,
    },
    age : {
        type: Number,
    }

});

const User = mongoose.model('userdetails', userSchema);
module.exports = User;