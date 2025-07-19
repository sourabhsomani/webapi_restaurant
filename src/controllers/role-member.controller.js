const roleMemberService = require('../services/role-member.service');

const createRoleMember = async (req, res) => {
  const roleMember = await roleMemberService.createRoleMember(req.body);
  res.status(201).json(roleMember);
};

const getRoleMemberById = async (req, res) => {
  const roleMember = await roleMemberService.getRoleMemberById(req.params.id);
  res.json(roleMember);
};

const getRoleMembersByUser = async (req, res) => {
  const roleMembers = await roleMemberService.getRoleMembersByUser(req.params.userId);
  res.json(roleMembers);
};

const getAllRoleMembers = async (req, res) => {
  const roleMembers = await roleMemberService.getAllRoleMembers();
  res.json(roleMembers);
};

const updateRoleMember = async (req, res) => {
  await roleMemberService.updateRoleMember(req.params.id, req.body);
  res.json({ message: 'Role member updated successfully.' });
};

const deleteRoleMember = async (req, res) => {
  await roleMemberService.deleteRoleMember(req.params.id);
  res.json({ message: 'Role member deleted successfully.' });
};

module.exports = {
  createRoleMember,
  getRoleMemberById,
  getRoleMembersByUser,
  getAllRoleMembers,
  updateRoleMember,
  deleteRoleMember,
};
