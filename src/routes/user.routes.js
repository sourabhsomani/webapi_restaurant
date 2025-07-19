const express = require('express');
const userController = require('../controllers/user.controller');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

/**
 * @swagger
 * /users:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Get all users
 *     responses:
 *       200:
 *         description: List of users
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: Create a user
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *     responses:
 *       201:
 *         description: User created
 *
 * /users/{id}:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Get user by ID
 *     tags:
 *       - Users
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the user to retrieve
 *         schema:
 *          type: integer
 *     responses:
 *       200:
 *         description: User details
 *   put:
 *     security:
 *       - bearerAuth: []
 *     summary: Update user
 *     tags:
 *       - Users
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the user to update
 *         schema:
 *          type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               phone:
 *                 type: string
 *     responses:
 *       200:
 *         description: User updated
 *       400:
 *         description: Bad request, invalid user data
 * 
 *   delete:
 *     security:
 *       - bearerAuth: []
 *     summary: Delete user
 *     tags:
 *       - Users
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: ID of the user to delete
 *        schema:
 *          type: integer
 *     responses:
 *       200:
 *         description: User deleted
 * 
 * 
 * /users/change-password:
 *   put:
 *    security:
 *     - bearerAuth: []
 *    summary: Change user password
 *    tags:
 *      - Users
 *    requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               oldPassword: { type: string }
 *               newPassword: { type: string }
 *    responses:
 *      200:
 *        description: Password changed successfully
 *      400:
 *        description: Bad request, invalid old password
 */

router.use(authMiddleware);

router.put('/change-password', userController.changeUserPassword);
router.get('/', userController.getAllUsers);
router.post('/', userController.createUser);
router.get('/:id', userController.getUserById);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);
module.exports = router;
