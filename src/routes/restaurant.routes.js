const express = require('express');
const restaurantController = require('../controllers/restaurant.controller');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

/**
 * @swagger
 * /restaurants:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Get all restaurants
 *     tags:
 *       - Restaurants
 *     responses:
 *       200:
 *         description: List of restaurants
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: Create a restaurant
 *     tags:
 *       - Restaurants
 *     requestBody:
 *       required: true
 *     responses:
 *       201:
 *         description: Restaurant created
 *
 * /restaurants/{id}:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Get restaurant by ID
 *     tags:
 *       - Restaurants
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the restaurant to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Restaurant details
 *       404:
 *         description: Restaurant not found
 *
 *   put:
 *     security:
 *       - bearerAuth: []
 *     summary: Update restaurant
 *     tags:
 *       - Restaurants
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the restaurant to update
 *         schema:
 *           type: string
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
 *               contact:
 *                 type: string
 *               gst_number:
 *                 type: string 
 *     responses:
 *       200:
 *         description: Restaurant updated
 *       400:
 *         description: Bad request
 *       404:
 *         description: Restaurant not found
 *
 *   delete:
 *     security:
 *       - bearerAuth: []
 *     summary: Delete restaurant
 *     tags:
 *       - Restaurants
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the restaurant to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Restaurant deleted
 *       404:
 *         description: Restaurant not found
 */

router.use(authMiddleware);

router.get('/', restaurantController.getAllRestaurants);
router.post('/', restaurantController.createRestaurant);
router.get('/:id', restaurantController.getRestaurantById);
router.put('/:id', restaurantController.updateRestaurant);
router.delete('/:id', restaurantController.deleteRestaurant);

module.exports = router;
