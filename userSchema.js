const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    id: {
        type: Number,
        required: true
    },
    phone_number: {
        type: Number,
        required: true,
        maxlength: 10
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

const User = mongoose.model('User', userSchema);
module.exports = User;