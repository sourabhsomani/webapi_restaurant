module.exports = (sequelize, DataTypes) => {
  const Restaurant = sequelize.define('Restaurants', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.TEXT,
    },
    gst_number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
{
  timestamps: false,
  tableName: 'restaurants' // force table name to be singular
});

  Restaurant.associate = (models) => {
    Restaurant.hasMany(models.Branch, { foreignKey: 'restaurant_id', onDelete: 'CASCADE' });
    Restaurant.hasMany(models.RoleMember, { foreignKey: 'restaurant_id' });
  };

  return Restaurant;
};
