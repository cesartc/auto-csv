const { MongoClient } = require('mongodb')
let db = null

module.exports = {
  getDb: () => {
    return db
  },
  connectDb: async (dbURL) => {
    let retries = 5
    while (retries > 0) {
      try {
        const client = await MongoClient.connect(dbURL)
        db = client.db('auto')
        break
      } catch (e) {
        console.log('Trying to connect to db. Remaining attempts:', retries, e.message)
        retries--
        await new Promise(resolve => setTimeout(resolve, 2000))
      }
    }
  }
}
