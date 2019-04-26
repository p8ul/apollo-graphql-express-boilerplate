

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Posts', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    title: {
      type: Sequelize.STRING,
    },
    body: {
      type: Sequelize.TEXT,
    },
    file: {
      type: Sequelize.STRING,
    },
    UserId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Users', // name of Target model
        key: 'id', // Key in Target model that we're referencing
      },
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: queryInterface => queryInterface.dropTable('Posts'),
};
