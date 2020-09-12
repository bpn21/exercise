var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ProductSchema = new Schema({
    name: String,
    brand: String,
    quantity: String,

    client: String,
    items: {
        type: String
    },
    model: String,
    catogory: {
        type: String,
    },
    size: {
        type: String,
        // enum: ['small', 'medium', 'large']
    },
    status: {
        type: String,
    },
    price: Number,
    quantity: Number,
    manuDate: Date,
    experyDate: Date,
    image: {
        type: String
    },
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