const User = require('../models/user');

exports.createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    const token = await user.generateAuthToken();
    return res
      .status(200)
      .json({ status: true, message: `Successfully login.`, data: user });
  } catch (error) {
    return res.status(400).json({ status: false, message: `${error.message}` });
  }
};

exports.loginuser = async (req, res) => {
  try {
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );
    const token = await user.generateAuthToken();
    return res
      .status(200)
      .json({ status: true, message: `Successfully login.` });
  } catch (error) {
    return res.status(400).json({ status: false, message: `${error.message}` });
  }
};

exports.logout = async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token !== req.token;
    });
    await req.user.save();
    return res.status(200).json({ status: true, message: `User loged out.` });
  } catch (error) {
    return res.status(400).json({ status: false, message: `${error.message}` });
  }
};
