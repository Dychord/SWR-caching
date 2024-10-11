const mongoose = require('mongoose')
mongoose.createConnection('mongodb://127.0.0.1:27017/paginationInReactAuthentication')

const productSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  price: {
    type: Number,
  },
  description: {
    type: String,
  },
  category: {
    type: String,
  },
  image: {
    type: String,
  },
  rating: {
    rate: {
      type: Number,
    },
    count: {
      type: Number,
    }
  }
});

module.exports = mongoose.model('Product', productSchema);


