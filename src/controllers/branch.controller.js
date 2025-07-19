const branchService = require('../services/branch.service');

const createBranch = async (req, res) => {
  const branch = await branchService.createBranch(req.body);
  res.status(201).json(branch);
};

const getBranchById = async (req, res) => {
  const branch = await branchService.getBranchById(req.params.id);
  res.json(branch);
};

const getAllBranches = async (req, res) => {
  const branches = await branchService.getAllBranches();
  res.json(branches);
};

const getBranchesByRestaurant = async (req, res) => {
  const branches = await branchService.getBranchesByRestaurant(req.params.restaurantId);
  res.json(branches);
};

const updateBranch = async (req, res) => {
  await branchService.updateBranch(req.params.id, req.body);
  res.json({ message: 'Branch updated successfully.' });
};

const deleteBranch = async (req, res) => {
  await branchService.deleteBranch(req.params.id);
  res.json({ message: 'Branch deleted successfully.' });
};

module.exports = {
  createBranch,
  getBranchById,
  getAllBranches,
  getBranchesByRestaurant,
  updateBranch,
  deleteBranch,
};
