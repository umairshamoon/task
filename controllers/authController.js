import { User, validateUser } from '../models/User.js';
import bcrypt from 'bcrypt';

//register user
const registerUser = async (req, res) => {
  const { name, email, password, role } = req.body;
  //checking if data is correct or not
  const { error } = validateUser(req.body);
  if (error)
    return res.status(400).send(error.details[0].message);

  //checking if user already exists
  const isUserRegistered = await User.findOne({ email });
  if (isUserRegistered)
    return res.status(400).send('user already exists');

  //registering new user
  const user = new User({ name, email, password, role });
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  await user.save();
  res.status(200).send(user);
};

//login
const login = async (req, res) => {
  const { email, password } = req.body;
  //checking null values
  if (!email || !password)
    res.status(400).send('Please Enter all values');

  //finding user in database
  const user = await User.findOne({ email });
  //checking if user exists
  if (!user) return res.status(400).send('User Does Not Exists');

  const result = await bcrypt.compare(password, user.password);

  if (!result)
    return res.status(400).send('Password is incorrect');
  const token = user.generateAuthToken();

  res.header('x-auth-token', token).status(200).send('Login');
};

//update profile
const updateProfile = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status.apply(400).send('Please enter all values');
  }
  // get the user

  // setting new values
  const user = new User({
    name,
    email,
    password,
  });
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  await user.save();

  // new token
  const token = user.createJWT();

  res.status(400).send('Profile Updated');
};
export { login, registerUser, updateProfile };
