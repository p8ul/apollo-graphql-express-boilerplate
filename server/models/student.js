

module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
    firstName: DataTypes.STRING,
    email: DataTypes.STRING,
  }, {});
  Student.associate = function (models) {
    // associations can be defined here
    Student.hasMany(models.Hobbies);
  };
  return Student;
};
