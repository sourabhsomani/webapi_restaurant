const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS||'',
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
  }
);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Role = require('./roles.model')(sequelize, Sequelize);
db.User = require('./user.model')(sequelize, Sequelize);
db.RoleMember = require('./role-member.model')(sequelize, Sequelize);
db.Restaurant = require('./restaurant.model')(sequelize, Sequelize);
db.Branch = require('./branch.model')(sequelize, Sequelize);
db.Category = require('./category.model')(sequelize, Sequelize);
db.Menu = require('./menu.model')(sequelize, Sequelize);

// Set up associations
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

module.exports = db;
