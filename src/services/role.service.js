const db = require('../models');
const { Role } = db;

const createRole = (data) => Role.create(data);

const getRoleById = (id) => Role.findByPk(id);
const getRoleByType = (role_type) => Role.findOne({where: {role_type}});

const getAllRoles = () => Role.findAll();

const updateRole = (id, data) =>
  Role.update(data, { where: { id } });

const deleteRole = (id) => Role.destroy({ where: { id } });

module.exports = {
  createRole,
  getRoleById,
  getAllRoles,
  updateRole,
  deleteRole,
  getRoleByType
};
