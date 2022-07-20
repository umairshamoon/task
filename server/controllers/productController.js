const { StatusCodes } = require('http-status-codes');

const {
  Product,
  validateProduct,
} = require('../models/Product.js');

//View all Products
exports.getAllProducts = async (req, res) => {
  const products = await Product.find()
    .select('name discription image postedBy')
    .populate('postedBy', 'name email');

  if (!products.length)
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ msg: 'Product Does not Exists' });
  res.status(StatusCodes.OK).json(products);
};

//View one product
exports.getOneProduct = async (req, res) => {
  const id = req.params.id;
  const product = await Product.findById(id)
    .select('name discription image postedBy -_id')
    .populate('postedBy', 'name email -_id');
  if (!product)
    return res
      .status(StatusCodes.NOT_FOUND)
      .send('Product Does not Exists');
  res.status(StatusCodes.OK).send(product);
};

//Add Product
exports.addProduct = async (req, res) => {
  const postedBy = req.user._id;
  console.log(req.file);
  if (!req.file)
    return res
      .status(StatusCodes.BAD_REQUEST)
      .send('Image is required');

  const image = req.file.path;
  console.log(req.body);
  const { name, discription } = req.body;

  const { error } = validateProduct({
    name,
    discription,
  });
  if (error)
    return res
      .status(StatusCodes.BAD_REQUEST)
      .send(error.details[0].message);

  let product = await Product.findOne({ name });
  if (product)
    return res
      .status(StatusCodes.BAD_REQUEST)
      .send('product already exists in data base');
  product = new Product({
    name,
    discription,
    postedBy,
    image,
  });
  await product.save();
  res.status(StatusCodes.CREATED).send(product);
};

//Update Product
exports.updateProduct = async (req, res) => {
  const { name, discription } = req.body;
  const postedBy = req.user._id;
  const image = req.file.path;
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

  product.name = name;
  product.discription = discription;
  product.postedBy = postedBy;
  product.image = image;
  await product
    .save()
    .then((res) => {
      res
        .status(StatusCodes.OK)
        .send('Product Updated successfully');
    })
    .catch((error) => {
      res.status(StatusCodes.BAD_GATEWAY).send(error);
    });
};

//delete a product
exports.deleteProduct = async (req, res) => {
  const id = req.params.id;
  await Product.findByIdAndDelete(id)
    .then((product) => {
      res
        .status(StatusCodes.OK)
        .send(`Product deleted Successfully ${product}`);
    })
    .catch((error) => {
      return res
        .status(StatusCodes.NOT_FOUND)
        .send(`Prduct Does not Exists ${error}`);
    });
};
