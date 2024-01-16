const dbConfig = require('../config/database');
const mongosee = require('mongoose');

module.exports = {
    mongosee,
    url: dbConfig.url,
    users: require('./users.model')(mongosee)
}