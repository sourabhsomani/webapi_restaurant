const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User } = require('../models');
const roleService = require('../services/role.service');
const roleMemberService = require('../services/role-member.service');


exports.register = async (req, res, next) => {
  try {
    console.log(req.body)
    const { name, email, password } = req.body;
    
    const hashed = await bcrypt.hash(password, 10);
    const user = await User.create({ username:name, email:email, password: hashed, phone:'' });
    const origin = req.headers.origin;
    if(origin && origin.includes(':3001')){
      role = await roleService.getRoleByType('rest admin');
      if(role){
        await roleMemberService.createRoleMember({
          user_id: user.id,
          role_id: role.id,
          restaurant_id: null,
          branch_id:null
        })
      }
    }
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(401).json({ message: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.json({ token });
  } catch (err) {
    next(err);
  }
};
