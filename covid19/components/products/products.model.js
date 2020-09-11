var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ProductSchema = new Schema({
    
    client: String,
    items: {
        type: String
    },
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
    image : {
        type : String
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