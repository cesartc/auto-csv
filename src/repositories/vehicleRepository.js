class VehicleRepository {
  constructor (db) {
    this.model = db.collection('vehicles')
  }

  insertOne (providerName, data) {
    data.providerName = providerName
    return this.model.insertOne(data)
  }
}

module.exports = VehicleRepository
