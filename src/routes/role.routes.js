const express = require('express');
const roleController = require('../controllers/role.controller');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

/**
 * @swagger
 * /roles:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Get all roles
 *     responses:
 *       200:
 *         description: List of roles
 *   
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: Create a restaurant role
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *               name:
 *                 type: string
 *                 description: Role name (e.g., Manager, Chef, Waiter)
 *     responses:
 *       201:
 *         description: Role created successfully
 *       400:
 *         description: Invalid role input

 *
 * /roles/{id}:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Get role by ID
 *     tags:
 *       - Roles
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the role to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Role details
 *       404:
 *         description: Role not found
 * 
 *   put:
 *     security:
 *       - bearerAuth: []
 *     summary: Update role
 *     tags:
 *       - Roles
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the role to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               role_type:
 *                 type: string
 *                 enum: [Manager, Chef, Waiter, Delivery, Cashier]
 *     responses:
 *       200:
 *         description: Role updated
 *       400:
 *         description: Bad request
 *
 *   delete:
 *     security:
 *       - bearerAuth: []
 *     summary: Delete role
 *     tags:
 *       - Roles
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the role to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Role deleted
 *       404:
 *         description: Role not found
 */
router.use(authMiddleware);

router.get('/', roleController.getAllRoles);
router.post('/', roleController.createRole);
router.get('/:id', roleController.getRoleById);
router.put('/:id', roleController.updateRole);
router.delete('/:id', roleController.deleteRole);

module.exports = router;
