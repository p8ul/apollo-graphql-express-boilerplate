

module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    title: DataTypes.STRING,
    body: DataTypes.TEXT,
    UserId: DataTypes.INTEGER,
  }, {});
  Post.associate = function (models) {
    // associations can be defined here
    Post.belongsTo(models.User);
  };
  return Post;
};
