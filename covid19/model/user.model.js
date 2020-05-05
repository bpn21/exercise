mongoose = require('mongoose');
var Schema = mongoose.Schema;
userSchema = new Schema({
    name: String,
    email: {
        type: String,
        unique: true,
        sparse: true,
    },
    password: {
        type: String,
        required: true,
        unique: false,

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