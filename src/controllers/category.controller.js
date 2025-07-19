const categoryService = require('../services/category.service');

const getAllCategories = async (req, res) => {
  const categories = await categoryService.getAllCategories();
  res.json(categories);
};


const createCategory = async (req, res) => {
  const category = await categoryService.createCategory(req.body);
  res.status(201).json(category);
};

const getCategoryById = async (req, res) => {
  const category = await categoryService.getCategoryById(req.params.id);
  res.json(category);
};

const updateCategory = async (req, res) => {
  await categoryService.updateCategory(req.params.id, req.body);
  res.json({ message: 'Category updated successfully.' });
};

const deleteCategory = async (req, res) => {
  await categoryService.deleteCategory(req.params.id);
  res.json({ message: 'Category deleted successfully.' });
};

module.exports = {
  getAllCategories,
  createCategory,
  getCategoryById,
  updateCategory,
  deleteCategory,
};
