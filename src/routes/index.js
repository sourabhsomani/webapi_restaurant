const express = require('express');
const userRoutes = require('./user.routes');
const authRoutes = require('./auth.routes');
const restRoutes = require('./restaurant.routes');
const branchRoutes = require('./branch.routes');
const roleMemberRoutes = require('./role-member.routes');
const roleRoutes = require('./role.routes');
const menuRoutes = require('./menu.routes');
const categoryRoutes = require('./category.routes');

const router = express.Router();

router.use('/users', userRoutes);
router.use('/auth', authRoutes);
router.use('/restaurants', restRoutes);
router.use('/branches', branchRoutes);
router.use('/role-members', roleMemberRoutes);
router.use('/roles', roleRoutes);
router.use('/menus', menuRoutes);
router.use('/categories', categoryRoutes);


module.exports = router;
