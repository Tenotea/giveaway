const mongoDB = require('mongodb')

module.exports = async () => (await mongoDB.MongoClient.connect('mongodb://127.0.0.1:27017/giveaway', {useUnifiedTopology: true, useNewUrlParser: true})).db('giveway')
