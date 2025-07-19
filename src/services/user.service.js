const db = require('../models');
const { User } = db;

const createUser = (data) => User.create(data);

const getUserById = (id) => User.findByPk(id);

const getUserByEmail = (email) => User.findOne({ where: { email } });

const getAllUsers = () => User.findAll();

const updateUser = (id, data) =>
  User.update(data, { where: { id } });

const deleteUser = (id) => User.destroy({ where: { id } });

module.exports = {
  createUser,
  getUserById,
  getUserByEmail,
  getAllUsers,
  updateUser,
  deleteUser,
};
