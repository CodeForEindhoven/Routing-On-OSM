var path = require('path'),
  rootPath = path.normalize(__dirname + '/../..');

var config = {
  development: {
    server: {
      port: 3000,
      hostname: 'localhost',
    },
    database: {
      username: "postgres",
      password: "mysecretpassword",
      url: 'postgresql://localhost:5432',
      dbname: 'eersel'
    },
    root: rootPath
  },
};

module.exports = config[process.env.NODE_ENV || 'development'];
