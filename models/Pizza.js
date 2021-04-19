const mongoose = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const PizzaSchema = mongoose.Schema({
    pizzaName: {
      type: String
    },
    createdBy: {
      type: String
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => dateFormat(createdAtVal)
    },
    size: {
      type: String,
      default: 'Large'
    },
    toppings: [],
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }
    ]
  },
  {
      toJSON: {
          virtuals: true,
          getters: true
      },
      id: false
  }
  );

  PizzaSchema.virtual('commentCount').get(function(){
      return this.comments.length
  })

  // create the Pizza model using the PizzaSchema
const Pizza = mongoose.model('Pizza', PizzaSchema);

// export the Pizza model
module.exports = Pizza;