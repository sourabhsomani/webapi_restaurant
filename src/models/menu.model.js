module.exports = (sequelize, Sequelize) => {
  const Menu = sequelize.define('Menu', {
    branch_id: { type: Sequelize.INTEGER, allowNull: false },
    name: { type: Sequelize.STRING, allowNull: false },
    description: { type: Sequelize.TEXT },
    price: { type: Sequelize.FLOAT, allowNull: false },
    category_id: { type: Sequelize.INTEGER, allowNull: false },
  },{
  timestamps: false,
  tableName: 'menus' // force table name to be singular
});

  Menu.associate = (models) => {
    Menu.belongsTo(models.Branch, { foreignKey: 'branch_id' });
    Menu.belongsTo(models.Category, { foreignKey: 'category_id' });
  };

  return Menu;
};
