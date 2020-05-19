const csv = require('csv-parser')
const fs = require('fs')

class Streamer {
  static streamToMongo (filePath, repository, rowParser, providerName) {
    let parsedRow = null
    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (row) => {
        parsedRow = rowParser.parse(row)
        console.log(JSON.stringify(row), 'parsed to: ', JSON.stringify(parsedRow))
        repository.insertOne(providerName, parsedRow)
      })
      .on('end', () => {
        fs.unlinkSync(filePath)
        console.log('csv file processed and unlinked')
      })
  }
}

module.exports = Streamer
