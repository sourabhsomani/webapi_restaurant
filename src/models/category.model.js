module.exports = (sequelize, Sequelize) => {
  const Category = sequelize.define('Category', {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
  },{
  timestamps: false,
  tableName: 'categories' // force table name to be singular
});

  Category.associate = (models) => {
    Category.hasMany(models.Menu, { foreignKey: 'category_id' });
  };

  return Category;
};

