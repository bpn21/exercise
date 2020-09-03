mongoose = require('mongoose');
var Schema = mongoose.Schema;
userSchema = new Schema({
    name: String,
    email: {
        type: String,
        unique: true,
        sparse: true,
    },
    firstName : {
        type: String
    },
    lastName :{
        type: String
    },
    password: {
        type: String,
        required: true,
        unique: false

    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    gender : {
        type : String,
            },
    address: {
        temporaryAddress: String,
        permanentAddress: String
    },
    role: {
        type: Number,
        enum: [1, 2, 3],
        default: 2,
    },
}, {
    timestamps: true
})
var userModel = mongoose.model('user', userSchema);

module.exports = userModel;