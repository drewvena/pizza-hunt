const mongoose = require('mongoose');

const PizzaSchema = mongoose.Schema({
    pizzaName: {
      type: String
    },
    createdBy: {
      type: String
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    size: {
      type: String,
      default: 'Large'
    },
    toppings: []
  });

  // create the Pizza model using the PizzaSchema
const Pizza = mongoose.model('Pizza', PizzaSchema);

// export the Pizza model
module.exports = Pizza;