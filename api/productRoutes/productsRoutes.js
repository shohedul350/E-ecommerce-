const express = require('express');
const { check, validationResult } = require('express-validator');
const errorFormator = require('../../utilis/errorFormator');
const upload = require('../../middleware/uploadMiddleware');
const AuthenTicateAdmin = require('../../middleware/AuthenticateAdmin');

const router = express.Router();
const Product = require('../../models/productModel/Products');
const Categories = require('../../models/productModel/Categories');


//  upload product
//  api/product/uploadproduct

router.post('/uploadproduct', AuthenTicateAdmin, upload.single('image'), [
  check('title', 'Please provide Title')
    .not()
    .isEmpty(),
  // check('image', 'Please provide Image')
  //   .not()
  //   .isEmpty(),
  check('price', 'Please provide Price')
    .not()
    .isEmpty(),

  check('company', 'please provide Company')
    .not()
    .isEmpty(),
  check('info', 'please provide Info')
    .not()
    .isEmpty(),
  check('categories', 'please provide categories')
    .not()
    .isEmpty(),
],
async (req, res, next) => {
  const errors = validationResult(req).formatWith(errorFormator);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      error: errors.mapped(),
    });
  }
  try {
    const product = new Product({
      categories: req.body.categories,
      title: req.body.title,
      image: req.file.path,
      price: req.body.price,
      company: req.body.company,
      info: req.body.info,
    });
    const newProduct = await product.save();
    res.status(200).json({ msg: 'Product Upload Succesfully', newProduct });
  } catch (error) {
    next(error);
  }
  return 0;
});


//  getAll product
//  api/product/getallProduct


router.get('/getallProduct', async (req, res, next) => {
  try {
    const { page, perPage, categories } = req.query;
    const options = {
      page: parseInt(page, 10) || 1,
      limit: parseInt(perPage, 10) || 4,
    };
    const getAllProduct = await Product.paginate({ categories }, options);
    // const getAllProduct = await Product.find();
    if (!getAllProduct) {
      return res.status(404).json({ msg: 'Product Not Found' });
    }
    res.status(200).json(getAllProduct);
  } catch (error) {
    next(error);
  }
  return 0;
});

// get letest product
router.get('/geLetsetProduct', async (req, res, next) => {
  try {
    const { page, perPage } = req.query;
    const numberOfDaysToLookBack = req.query.letest ? req.query.letest : 1;
    const options = {
      page: parseInt(page, 10) || 1,
      limit: parseInt(perPage, 10) || 4,
    };
    const getAllProduct = await Product.paginate({
      createdAt: {
        $gte: new Date((new Date().getTime() - (numberOfDaysToLookBack * 24 * 60 * 60 * 1000))),
      },
    }, options);
    if (!getAllProduct) {
      return res.status(404).json({ msg: 'Product Not Found' });
    }
    res.status(200).json(getAllProduct);
  } catch (error) {
    next(error);
  }
  return 0;
});
// allItemProduct
router.get('/allItemProduct', AuthenTicateAdmin, async (req, res, next) => {
  try {
    const { page, perPage } = req.query;

    const options = {
      page: parseInt(page, 10) || 1,
      limit: parseInt(perPage, 10) || 4,
    };
    const getAllProduct = await Product.paginate({ }, options);
    // const getAllProduct = await Product.find();
    if (!getAllProduct) {
      return res.status(404).json({ msg: 'Product Not Found' });
    }
    res.status(200).json(getAllProduct);
  } catch (error) {
    next(error);
  }
  return 0;
});

//  get single product
//  api/product/getproduct/:id

router.get('/singleProduct/:id', async (req, res, next) => {
  try {
    const getProduct = await Product.findById(req.params.id);
    if (!getProduct) {
      return res.status(404).json({ message: 'Product Not Found' });
    }
    res.status(200).json(getProduct);
  } catch (error) {
    next(error);
  }
  return 0;
});

//  update product by product id
//  api/product/updateproduct/:id

// router.put('/updateproduct/:id', async (req, res) => {
//   try {
//     const updateProduct = await
//     Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     res.status(200).json({ message: 'Product Update Succesfully ', updateProduct });
//   } catch (error) {
//     res.status(500).json(error);
//   }
// });

//  delete  product by product id
//  api/product//deleteproduct/:id

router.delete('/deleteProduct/:id', AuthenTicateAdmin, async (req, res, next) => {
  try {
    const deleteProduct = await
    Product.findByIdAndRemove(req.params.id);
    res.status(200).json({ msg: 'Product Delete Succesfully Deleted', deleteProduct });
  } catch (error) {
    next(error);
  }
});

// add categories
router.post('/add-categories', AuthenTicateAdmin, async (req, res) => {
  try {
    const categories = new Categories({
      categories: req.body.categories,
    });
    const newcat = await categories.save();
    res.status(200).json({ msg: 'Succesfully Save', newcat });
  } catch (error) {
    console.log(error);
  }
});

// showcategories
router.get('/categories', async (req, res, next) => {
  try {
    const categories = await Categories.find();
    res.status(200).json(categories);
  } catch (error) {
    next(error);
  }
});

// delete categories
router.delete('/categories/:id', AuthenTicateAdmin, async (req, res, next) => {
  try {
    const deleteCategories = await
    Categories.findByIdAndRemove(req.params.id);
    res.status(200).json({ msg: 'Product Delete Succesfull', deleteCategories });
  } catch (error) {
    next(error);
  }
});

router.get('/search', async (req, res, next) => {
  try {
    const product = await Product.find(
      {
        $text: { $search: req.query.term },
      },
    );
    res.json(product);
  } catch (error) {
    next(error);
  }
});
module.exports = router;
