const { User, validateUser } = require('../models/User.js');
const bcrypt = require('bcrypt');
const { StatusCodes } = require('http-status-codes');

//register user
exports.registerUser = async (req, res) => {
  console.log(req.body);

  const { name, email, password, role } = req.body;

  //checking if data is correct or not
  const { error } = validateUser(req.body);
  if (error) {
    console.log(error.details[0].message);
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: error.details[0].message });
  }

  //checking if user already exists
  const isUserRegistered = await User.findOne({ email });
  if (isUserRegistered)
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: 'user already exists' });

  //registering new user
  const user = new User({ name, email, password, role });

  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  await user.save();
  res
    .status(StatusCodes.CREATED)
    .json({ msg: 'Account created successfully' });
};

//login
exports.login = async (req, res) => {
  const { email, password } = req.body;
  //checking null values
  if (!email || !password)
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: 'Please Enter all values' });

  //finding user in database
  const user = await User.findOne({ email });
  //checking if user exists
  if (!user)
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ msg: 'User Does Not Exists' });

  const result = await bcrypt.compare(password, user.password);

  if (!result)
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: 'Password is incorrect' });
  const token = user.generateAuthToken();

  res
    .status(StatusCodes.OK)
    .header('Auth', token)
    .json({ msg: 'Login successsfully' });
};

//update profile
exports.updateProfile = async (req, res) => {
  const { name, email, password } = req.body;
  req.body.role = req.user.role;
  const id = req.params.id;

  const { error } = validateUser(req.body);
  if (error) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .send(error.details[0].message);
  }
  let user = await User.findById(id);
  if (!user)
    return res
      .status(StatusCodes.NOT_FOUND)
      .send('User does not exist');

  // setting new values
  user = new User({
    name,
    email,
    password,
    role: req.body.role,
  });

  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);

  // new token
  const token = user.generateAuthToken();
  user.save();
  res
    .status(StatusCodes.CREATED)
    .header('Auth', token)
    .send('Profile Updated');
};
