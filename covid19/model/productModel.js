var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ProductSchema = new Schema({
    name: String,
    brand: {
        type: String,
    },
    model: {
        type: String
    },
    size: {
        type: String,
        enum: ['small', 'medium', 'large']
    },
    status: {
        type: String,
        enum: ['avaliable', 'sold']
    },
    quality: {
        type: String,
        enum: ['high', 'medium', 'low']
    },

    price: Number,
    manuDate: Date,
    experyDate: Date,
    quantity: Number,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    }
},
    {
        timestamps: true
    })

var productModel = mongoose.model('product', ProductSchema);

module.exports = productModel;