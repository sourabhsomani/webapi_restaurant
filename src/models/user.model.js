module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('Users', {
    id: {
      type: DataTypes.INTEGER, // or maybe Type STRING?
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },{
  timestamps: false,
  tableName: 'users' // force table name to be singular
});

  User.associate = (models) => {
    User.hasMany(models.RoleMember, { foreignKey: 'user_id', onDelete: 'CASCADE' });
  };

  return User;
};
