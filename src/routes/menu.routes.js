/**
 * @swagger
 * tags:
 *   name: Menus
 *   description: Menu item management for branches
 */

const express = require('express');
const menuController = require('../controllers/menu.controller');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.use(authMiddleware);

/**
 * @swagger
 * /menus:
 *   post:
 *     summary: Create a new menu item
 *     tags: [Menus]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - category_id
 *               - name
 *               - price
 *             properties:
 *               category_id:
 *                 type: integer
 *                 example: 1
 *               name:
 *                 type: string
 *                 example: Cheeseburger
 *               price:
 *                 type: number
 *                 example: 9.99
 *               description:
 *                 type: string
 *                 example: A delicious grilled cheeseburger
 *     responses:
 *       201:
 *         description: Menu item created successfully
 *       400:
 *         description: Invalid input
 */
router.post('/', menuController.createMenuItem);

/**
 * @swagger
 * /menus/{id}:
 *   get:
 *     summary: Get a menu item by ID
 *     tags: [Menus]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: Menu item ID
 *     responses:
 *       200:
 *         description: Menu item data
 *       404:
 *         description: Menu item not found
 */
router.get('/:id', menuController.getMenuItemById);

/**
 * @swagger
 * /menus/branch/{branchId}:
 *   get:
 *     summary: Get all menu items for a branch
 *     tags: [Menus]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: branchId
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: Branch ID
 *     responses:
 *       200:
 *         description: List of menu items for the branch
 *       404:
 *         description: Branch or menu items not found
 */
router.get('/branch/:branchId', menuController.getMenuByBranch);

/**
 * @swagger
 * /menus/{id}:
 *   put:
 *     summary: Update a menu item by ID
 *     tags: [Menus]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: Menu item ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Veggie Burger
 *               price:
 *                 type: number
 *                 example: 8.50
 *               description:
 *                 type: string
 *                 example: A tasty vegetarian option
 *     responses:
 *       200:
 *         description: Menu item updated successfully
 *       404:
 *         description: Menu item not found
 */
router.put('/:id', menuController.updateMenuItem);

/**
 * @swagger
 * /menus/{id}:
 *   delete:
 *     summary: Delete a menu item by ID
 *     tags: [Menus]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: Menu item ID
 *     responses:
 *       200:
 *         description: Menu item deleted successfully
 *       404:
 *         description: Menu item not found
 */
router.delete('/:id', menuController.deleteMenuItem);

module.exports = router;
