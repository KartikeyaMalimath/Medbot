const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    phone_number: {
        type: Number,
        required: true,
        maxlength: 19
    },
    userName: {
        type: String,
        required: true
    },
    age : {
        type: Number,
        required: true
    }

});

const User = mongoose.model('userdetails', userSchema);
module.exports = User;