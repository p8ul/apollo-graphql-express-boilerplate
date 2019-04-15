module.exports = {
  development: {
    username: process.env.DATABASE_USERNAME || 'stories',
    password: process.env.DATABASE_PASSWORD || 'stories',
    database: process.env.DATABASE_NAME || 'stories',
    host: '127.0.0.1',
    port: 5432,
    dialect: 'postgres',
  },
  test: {
    username: process.env.DATABASE_USERNAME || 'stories',
    password: process.env.DATABASE_NAME || 'stories',
    database: process.env.TEST_DATABASE_NAME || 'stories_test',
    host: '127.0.0.1',
    port: 5432,
    dialect: 'postgres',
  },
  production: {
    username: process.env.DATABASE_USERNAME || 'stories',
    password: process.env.DATABASE_PASSWORD || 'stories',
    database: process.env.DATABASE_NAME || 'stories',
    host: '127.0.0.1',
    port: 5432,
    dialect: 'postgres',
  },
};
