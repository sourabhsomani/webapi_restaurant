module.exports = (sequelize, DataTypes) => {
  const Branch = sequelize.define('Branch', {
    name: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pincode: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    longitude: {
      type: DataTypes.DECIMAL(10, 7),
      allowNull: false,
    },
    latitude: {
      type: DataTypes.DECIMAL(10, 7),
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    
  },
{
  timestamps: false,
  tableName: 'branches' // force table name to be singular
});

  Branch.associate = (models) => {
    Branch.belongsTo(models.Restaurant, { foreignKey: 'restaurant_id', onDelete: 'CASCADE' });
    Branch.hasMany(models.RoleMember, { foreignKey: 'branch_id' });
  };

  return Branch;
};
