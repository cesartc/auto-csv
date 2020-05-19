const { connectDb } = require('./mongoConnection')
const dbURL = process.env.DB_URL || 'mongodb://mongo:27017'

async function run () {
  await connectDb(dbURL)
  require('./server')
}

run()
