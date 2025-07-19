const db = require('../models');
const { Branch } = db;

const createBranch = (data) => Branch.create(data);

const getBranchById = (id) => Branch.findByPk(id);

const getAllBranches = () => Branch.findAll();

const getBranchesByRestaurant = (restaurant_id) =>
  Branch.findAll({ where: { restaurant_id } });

const updateBranch = (id, data) =>
  Branch.update(data, { where: { id } });

const deleteBranch = (id) => Branch.destroy({ where: { id } });

module.exports = {
  createBranch,
  getBranchById,
  getAllBranches,
  getBranchesByRestaurant,
  updateBranch,
  deleteBranch,
};
