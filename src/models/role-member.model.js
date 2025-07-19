module.exports = (sequelize, DataTypes) => {
  const RoleMember = sequelize.define('RoleMember', {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    restaurant_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    branch_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
{
    timestamps: false,
    tableName: 'role_members'
});

  RoleMember.associate = (models) => {
    RoleMember.belongsTo(models.User, { foreignKey: 'user_id', onDelete: 'CASCADE' });
    RoleMember.belongsTo(models.Role, { foreignKey: 'role_id' });
    RoleMember.belongsTo(models.Restaurant, { foreignKey: 'restaurant_id' });
    RoleMember.belongsTo(models.Branch, { foreignKey: 'branch_id' });
  };

  return RoleMember;
};
