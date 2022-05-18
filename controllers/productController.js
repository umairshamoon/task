import { StatusCodes } from 'http-status-codes';
import { Product, validateProduct } from '../models/Product.js';
import multer from 'multer';
const upload = multer({ dest: 'uploads/' });

//View all Products
const getAllProducts = async (req, res) => {
  await Product.find({})
    .select('name discription postedBy -_id')
    .then((products) => {
      res.status(StatusCodes.OK).send(products);
    })
    .catch((error) => {
      return res
        .status(StatusCodes.NOT_FOUND)
        .send('Product Does not Exists');
    });
};

//View one product
const getOneProduct = async (req, res) => {
  const id = req.params.id;
  await Product.findById(id)
    .select('name discription postedBy -_id')
    .then((product) => {
      res.status(StatusCodes.OK).send(product);
    })
    .catch((error) => {
      return res
        .status(StatusCodes.NOT_FOUND)
        .send('Product Does not Exists');
    });
};
//Add Product
const addProduct = async (req, res) => {
  const { error } = validateProduct(req.body);
  if (error)
    return res
      .status(StatusCodes.BAD_REQUEST)
      .send(error.details[0].message);
  console.log('id is ', req.user._id);
  req.body.postedBy = req.user._id;
  const { name, discription, postedBy } = req.body;
  let product = await Product.findOne({ name });
  if (product)
    return res
      .status(StatusCodes.BAD_REQUEST)
      .send('product already exists in data base');
  product = new Product({
    name,
    discription,
    postedBy,
  });
  await product.save();
  res.status(StatusCodes.CREATED).send(product);
};

//Update Product
const updateProduct = async (req, res) => {
  const { name, discription } = req.body;

  const id = req.params.id;
  let product = await Product.findById(id);
  if (!product)
    return res
      .status(StatusCodes.NOT_FOUND)
      .send('Product does not exists');

  const { error } = validateProduct(req.body);
  if (error)
    return res
      .status(StatusCodes.BAD_REQUEST)
      .send(error.details[0].message);

  product = new Product({
    name,
    discription,
  });
  await product.save();
  res.status(StatusCodes.OK).send(product);
};

//delete a product
const deleteProduct = async (req, res) => {
  const id = req.params.id;
  const product = await Product.findByIdAndDelete(id)
    .then((product) => {
      res
        .status(StatusCodes.OK)
        .send('Product deleted Successfully');
    })
    .catch((error) => {
      return res
        .status(StatusCodes.NOT_FOUND)
        .send('Prduct Does not Exists');
    });
  // if (!product)
  //   return res
  //     .status(StatusCodes.NOT_FOUND)
  //     .send('Prduct Does not Exists');
  // res
  //   .status(StatusCodes.OK)
  //   .send('Product deleted Successfully');
};

export {
  getAllProducts,
  addProduct,
  updateProduct,
  deleteProduct,
  getOneProduct,
};
