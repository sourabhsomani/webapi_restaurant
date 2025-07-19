const userService = require('../services/user.service');
const bcrypt = require('bcryptjs');

const createUser = async (req, res) => {
  const user = await userService.createUser(req.body);
  res.status(201).json(user);
};

const getUserById = async (req, res) => {
  const user = await userService.getUserById(req.params.id);
  res.json(user);
};

const getUserByEmail = async (req, res) => {
  const user = await userService.getUserByEmail(req.params.email);
  res.json(user);
};

const getAllUsers = async (req, res) => {
  const users = await userService.getAllUsers();
  res.json(users);
};

const updateUser = async (req, res) => {
  await userService.updateUser(req.params.id, req.body);
  res.json({ message: 'User updated successfully.' });
};

const deleteUser = async (req, res) => {
  await userService.deleteUser(req.params.id);
  res.json({ message: 'User deleted successfully.' });
};

const changeUserPassword = async (req, res) => {
  const userId = req.user.id;
  const { oldPassword, newPassword, } = req.body;
  const user = await userService.getUserById(userId);
  if (!user) {
    return res.status(404).json({ message: 'User not found.' });
  }
  const isMatch = await bcrypt.compare(oldPassword, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: 'Invalid old password.' });
  }
  const hashedNewPassword = await bcrypt.hash(newPassword, 10);
  console.log(hashedNewPassword);
  
  await userService.updateUser(userId, { password: hashedNewPassword });

  res.json({ message: 'Password changed successfully.' });
}

module.exports = {
  createUser,
  getUserById,
  getUserByEmail,
  getAllUsers,
  updateUser,
  deleteUser,
  changeUserPassword,
};
