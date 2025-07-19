const roleService = require('../services/role.service');

const createRole = async (req, res) => {
  const role = await roleService.createRole(req.body);
  res.status(201).json(role);
};

const getRoleById = async (req, res) => {
  const role = await roleService.getRoleById(req.params.id);
  res.json(role);
};

const getAllRoles = async (req, res) => {
  const roles = await roleService.getAllRoles();
  res.json(roles);
};

const updateRole = async (req, res) => {
  await roleService.updateRole(req.params.id, req.body);
  res.json({ message: 'Role updated successfully.' });
};

const deleteRole = async (req, res) => {
  await roleService.deleteRole(req.params.id);
  res.json({ message: 'Role deleted successfully.' });
};

module.exports = {
  createRole,
  getRoleById,
  getAllRoles,
  updateRole,
  deleteRole,
};
