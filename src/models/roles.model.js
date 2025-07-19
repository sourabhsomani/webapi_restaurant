module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define('Role', {
    role_type: {
      type: DataTypes.ENUM('super admin', 'rest admin', 'staff', 'customer'),
      allowNull: false,
    },
  },
{
  timestamps: false,
  tableName: 'roles' // force table name to be singular
});

  Role.associate = (models) => {
    Role.hasMany(models.RoleMember, { foreignKey: 'role_id' });
  };
 
  return Role;
};
