const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const presSchema = new Schema ({
    prescription: {
        type: String,
        require: true,
    },
    presString
});