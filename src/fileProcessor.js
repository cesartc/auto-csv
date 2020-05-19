const EventEmitter = require('events')
const ProviderRepository = require('./repositories/providerRepository')
const VehicleRepository = require('./repositories/vehicleRepository')
const RowParser = require('./rowParser')
const Streamer = require('./streamer')
const { getDb } = require('./mongoConnection')

class FileProcessor extends EventEmitter {}

const emitter = new FileProcessor()

emitter.on('fileUploaded', (filePath, providerName) => {
  const vehicleRepository = new VehicleRepository(getDb())
  const keyMap = ProviderRepository.getKeyMapOf(providerName)
  const rowParser = new RowParser(keyMap)
  Streamer.streamToMongo(filePath, vehicleRepository, rowParser, providerName)
})

module.exports = emitter
