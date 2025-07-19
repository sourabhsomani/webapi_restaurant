const db = require('../models');
const { Restaurant } = db;

const createRestaurant = (data) => Restaurant.create(data);

const getRestaurantById = (id) => Restaurant.findByPk(id);

const getAllRestaurants = () => Restaurant.findAll();

const updateRestaurant = (id, data) =>
  Restaurant.update(data, { where: { id } });

const deleteRestaurant = (id) => Restaurant.destroy({ where: { id } });

module.exports = {
  createRestaurant,
  getRestaurantById,
  getAllRestaurants,
  updateRestaurant,
  deleteRestaurant
};
