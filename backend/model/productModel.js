const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/paginationInReactTwo')

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  rating: {
    rate: {
      type: Number,
      required: true
    },
    count: {
      type: Number,
      required: true
    }
  }
});

module.exports = mongoose.model('Product', productSchema);


