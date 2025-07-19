const restaurantService = require('../services/restaurant.service');
const roleMemberService = require('../services/role-member.service');

const createRestaurant = async (req, res) => {
  const restaurant = await restaurantService.createRestaurant(req.body);
  const userId = req.user.id;
  const roleMember = await roleMemberService.getRoleMembersByUser(userId);
  await roleMemberService.updateRoleMember(roleMember[0].id,{
    restaurant_id: restaurant.id
  })
  res.status(201).json(restaurant);
};

const getRestaurantById = async (req, res) => {
  const restaurant = await restaurantService.getRestaurantById(req.params.id);
  res.json(restaurant);
};

const getAllRestaurants = async (req, res) => {
  const userId = req.user.id;
  console.log(userId)
  const roleMember = await roleMemberService.getRoleMembersByUser(userId);
  let restaurants = []
  console.log(roleMember)
  if(roleMember && roleMember[0].role_id==3){
    console.log(roleMember[0].restaurant_id)
    if(roleMember[0].restaurant_id){
      restaurants = await restaurantService.getRestaurantById(roleMember[0].restaurant_id);
    }
  } else{
    restaurants = await restaurantService.getAllRestaurants();
  }
  res.json(restaurants);
};

const updateRestaurant = async (req, res) => {
  await restaurantService.updateRestaurant(req.params.id, req.body);
  res.json({ message: 'Restaurant updated successfully.' });
};

const deleteRestaurant = async (req, res) => {
  await restaurantService.deleteRestaurant(req.params.id);
  res.json({ message: 'Restaurant deleted successfully.' });
};

module.exports = {
  createRestaurant,
  getRestaurantById,
  getAllRestaurants,
  updateRestaurant,
  deleteRestaurant,
};
