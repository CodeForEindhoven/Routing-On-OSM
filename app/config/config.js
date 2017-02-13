var path = require('path'),
  rootPath = path.normalize(__dirname + '/../..');

var config = {
  development: {
    server: {
      port: process.env.HOST_PORT || 3000
    },
    database: {
      host: process.env.DATABASE_HOST || "localhost",
      username: process.env.DATABASE_USER || "postgres",
      password: process.env.DATABASE_PASSWORD || "mysecretpassword",
      dbname: process.env.DATABASE_NAME || 'eersel'
    },
    root: rootPath
  },
};

module.exports = config[process.env.NODE_ENV || 'development'];
