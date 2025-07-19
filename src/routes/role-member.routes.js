const express = require('express');
const roleMemberController = require('../controllers/role-member.controller');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

/**
 * @swagger
 * /rolemembers:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Get all role members
 *     tags:
 *       - Role Members
 *     responses:
 *       200:
 *         description: List of role members
 *
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: Create a role member
 *     tags:
 *       - Role Members
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userId
 *               - roleId
 *             properties:
 *               userId:
 *                 type: string
 *                 description: ID of the user
 *               roleId:
 *                 type: string
 *                 description: ID of the role
 *     responses:
 *       201:
 *         description: Role member created
 *
 * /rolemembers/{id}:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Get role member by ID
 *     tags:
 *       - Role Members
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Role member ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Role member details
 *       404:
 *         description: Not found
 *
 *   put:
 *     security:
 *       - bearerAuth: []
 *     summary: Update role member
 *     tags:
 *       - Role Members
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Role member ID
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user_id:
 *                 type: string
 *                 description: New role ID to assign
 *               role_id:
 *                 type: string
 *                 description: New role ID to assign
 *               restaurant_id:
 *                 type: string
 *                 description: New restaurant ID to assign
 *               branch_id:
 *                 type: string
 *                 description: New branch ID to assign
 *     responses:
 *       200:
 *         description: Role member updated
 *       400:
 *         description: Bad request
 *       404:
 *         description: Not found
 *
 *   delete:
 *     security:
 *       - bearerAuth: []
 *     summary: Delete role member
 *     tags:
 *       - Role Members
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Role member ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Role member deleted
 *       404:
 *         description: Not found
 */

router.use(authMiddleware);

router.get('/', roleMemberController.getAllRoleMembers);
router.post('/', roleMemberController.createRoleMember);
router.get('/:id', roleMemberController.getRoleMemberById);
router.put('/:id', roleMemberController.updateRoleMember);
router.delete('/:id', roleMemberController.deleteRoleMember);

module.exports = router;
