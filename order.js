const { Schema, model} = require('mongoose');

const Order = new Schema ({
    order: {type: String, required: true}
})

module.exports = model('Order', Order)
