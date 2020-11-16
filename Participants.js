const mongoDB = require('mongodb')
require('dotenv').config()

module.exports = async () => (await mongoDB.MongoClient.connect(process.env.DATABASE_URI, {useUnifiedTopology: true, useNewUrlParser: true})).db('giveaway')