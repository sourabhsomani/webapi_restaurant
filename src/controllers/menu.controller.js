const menuService = require('../services/menu.service');

const createMenuItem = async (req, res) => {
  const menuItem = await menuService.createMenuItem(req.body);
  res.status(201).json(menuItem);
};

const getMenuItemById = async (req, res) => {
  const menuItem = await menuService.getMenuItemById(req.params.id);
  res.json(menuItem);
};

const getMenuByBranch = async (req, res) => {
  const menuItems = await menuService.getMenuByBranch(req.params.branchId);
  res.json(menuItems);
};

const updateMenuItem = async (req, res) => {
  await menuService.updateMenuItem(req.params.id, req.body);
  res.json({ message: 'Menu item updated successfully.' });
};

const deleteMenuItem = async (req, res) => {
  await menuService.deleteMenuItem(req.params.id);
  res.json({ message: 'Menu item deleted successfully.' });
};

module.exports = {
  createMenuItem,
  getMenuItemById,
  getMenuByBranch,
  updateMenuItem,
  deleteMenuItem,
};
