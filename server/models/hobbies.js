

module.exports = (sequelize, DataTypes) => {
  const Hobbies = sequelize.define('Hobbies', {
    title: DataTypes.STRING,
  }, {});
  Hobbies.associate = function (models) {
    // associations can be defined here
    Hobbies.belongsTo(models.Student, { foreignKey: 'studentId' });
  };
  return Hobbies;
};
