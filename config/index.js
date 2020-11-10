const config = require('../config.json').mongo_uri;

module.exports = {
    dev: process.env.MONGO_URI || config,
    prod: process.env.MONGO_URI || require('../config.json').mongo_uri
};