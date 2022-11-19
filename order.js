const { Schema, model} = require('mongoose');

const Order = new Schema ({
    order: {type: String}
})

module.exports = model('Order', Order)