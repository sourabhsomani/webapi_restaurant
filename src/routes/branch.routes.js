const express = require('express');
const branchController = require('../controllers/branch.controller');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

/**
 * @swagger
 * /branches:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Get all branches
 *     tags:
 *       - Branches
 *     responses:
 *       200:
 *         description: List of branches
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: Create a branch
 *     tags:
 *       - Branches
 *     requestBody:
 *       required: true
 *     responses:
 *       201:
 *         description: Branch created
 *
 * /branches/{id}:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Get branch by ID
 *     tags:
 *       - Branches
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the branch to retrieve 
 *         schema:
 *           type: string 
 *     responses:
 *       200:
 *         description: Branch details
 *       404:
 *         description: Branch not found
 *   put:
 *     security:
 *       - bearerAuth: []
 *     summary: Update branch
 *     tags:
 *       - Branches
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the branch to update
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: New name of the branch
 *               address:
 *                 type: string
 *                 description: Updated address of the branch
 *               city:
 *                 type: string
 *                 description: Updated city of the branch
 *               state:
 *                type: string
 *               pincode:
 *                type: string
 *               longitude:
 *                type: number
 *               latitude:
 *                type: number
 *               phone:
 *                type: string
 *               email:
 *                type: string
 *               restaurant_id:
 *                type: integer          
 *     responses:
 *       200:
 *         description: Branch updated
 *       400:
 *         description: Bad request, invalid branch data 
 * 
 *   delete:
 *     security:
 *       - bearerAuth: []
 *     summary: Delete branch
 *     tags:
 *       - Branches
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the branch to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Branch deleted
 *       404:
 *         description: Branch not found
 *
 * /branches/restaurant/{restaurantId}:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Get branches by restaurant ID
 *     tags:
 *       - Branches
 *     parameters:
 *       - in: path
 *         name: restaurantId
 *         required: true
 *         description: ID of the restaurant to get branches for
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: List of branches
 *       404:
 *         description: Restaurant not found
 */

router.use(authMiddleware);

router.get('/', branchController.getAllBranches);
router.post('/', branchController.createBranch);
router.get('/:id', branchController.getBranchById);
router.put('/:id', branchController.updateBranch);
router.delete('/:id', branchController.deleteBranch);
router.get('/restaurant/:restaurantId', branchController.getBranchesByRestaurant);

module.exports = router;
