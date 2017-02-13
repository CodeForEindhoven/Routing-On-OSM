var pg = require('pg');
var config = require('../config/config');
var conString = "postgres://" + config.database.username + ":" + config.database.password + "@" + config.database.host + "/" + config.database.dbname;
var client = new pg.Client(conString);

function connect_db() {
  client.connect(function(err) {
    if (err) {
      return console.error('✗ Postgresql Connection Error. Please make sure Postgresql is running. -> ', err);
    }
    client.query('SELECT NOW() AS "theTime"', function(err, result) {
      if (err) {
        return console.error('✗ Postgresql Running Query Error', err);
      }
      console.log(result.rows[0].theTime);
    });
  });
}

function query_db(t_query, callback) {
  client.query(t_query, callback);
}

function disconnect() {
  client.end();
}

module.exports = exports = {
  connectDB: connect_db,
  queryDB: query_db
};
