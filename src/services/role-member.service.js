const db = require('../models');
const { RoleMember } = db;

const createRoleMember = (data) => RoleMember.create(data);

const getRoleMemberById = (id) => RoleMember.findByPk(id);

const getRoleMembersByUser = (user_id) =>
  RoleMember.findAll({ where: { user_id } });

const getAllRoleMembers = () => RoleMember.findAll();

const updateRoleMember = (id, data) =>
  RoleMember.update(data, { where: { id } });

const deleteRoleMember = (id) => RoleMember.destroy({ where: { id } });

module.exports = {
  createRoleMember,
  getRoleMemberById,
  getRoleMembersByUser,
  getAllRoleMembers,
  updateRoleMember,
  deleteRoleMember,
};
