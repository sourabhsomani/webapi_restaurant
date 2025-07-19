const db = require('../models');
const { Category } = db;

const getAllCategories = () => Category.findAll();
const createCategory = (data) => Category.create(data);
const getCategoryById = (id) => Category.findByPk(id);
const updateCategory = (id, data) => Category.update(data, { where: { id } });
const deleteCategory = (id) => Category.destroy({ where: { id } });

module.exports = {
  getAllCategories,
  createCategory,
  getCategoryById,
  updateCategory,
  deleteCategory,
};
