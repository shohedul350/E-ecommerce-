const mongoose = require('mongoose');


const categoriesSchema = mongoose.Schema({
  categories: {
    type: String,
    maxlength: 50,
    required: true,
  },
},
{
  timestamps: true,
});

categoriesSchema.index({
  title: 'text',
  info: 'text',
}, {
  weights: {
    name: 5,
    description: 1,
  },
});


const categories = mongoose.model('categories', categoriesSchema);
module.exports = categories;
