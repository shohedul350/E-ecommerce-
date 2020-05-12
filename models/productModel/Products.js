const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const productSchema = mongoose.Schema({
  categories: {
    type: String,
    maxlength: 50,
    required: true,
  },
  title: {
    type: String,
    maxlength: 50,
    required: true,
  },
  company: {
    type: String,
    maxlength: 50,
    required: true,
  },
  info: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    default: 0,
  },
  image: {
    type: String,
    require: true,
  },
  inCart: {
    type: Boolean,
    default: false,
  },
  count: {
    type: Number,
    default: 1,
  },
  total: {
    type: Number,
    default: 0,
  },
},
{
  timestamps: true,
});
productSchema.index({ categories: 'text', title: 'text', company: 'text' });


productSchema.plugin(mongoosePaginate);
const Product = mongoose.model('Product', productSchema);
module.exports = Product;
