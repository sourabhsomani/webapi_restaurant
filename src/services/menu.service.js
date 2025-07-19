const db = require('../models');
const { Menu } = db;

const createMenuItem = (data) => Menu.create(data);
const getMenuItemById = (id) => Menu.findByPk(id);
const getMenuByBranch = (branch_id) => Menu.findAll({ where: { branch_id } });
const updateMenuItem = (id, data) => Menu.update(data, { where: { id } });
const deleteMenuItem = (id) => Menu.destroy({ where: { id } });

module.exports = {
  createMenuItem,
  getMenuItemById,
  getMenuByBranch,
  updateMenuItem,
  deleteMenuItem,
};
