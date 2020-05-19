const keys = {
  uuid: 'uuid',
  vin: 'vin',
  make: 'make',
  model: 'model',
  mileage: 'mileage',
  year: 'year',
  price: 'price',
  zipCode: 'zipCode',
  createDate: 'createDate',
  updateDate: 'updateDate'
}

module.exports = {
  NeoAuto: {
    id: keys.uuid,
    vehicle_id: keys.vin,
    make: keys.make,
    model: keys.model,
    kms: keys.mileage,
    year: keys.year,
    cost: keys.price,
    zip: keys.zipCode,
    createDate: keys.createDate,
    updateDate: keys.updateDate
  },
  AutoProvider: {
    _id: keys.uuid,
    vehicle: keys.vin,
    make: keys.make,
    MODEL: keys.model,
    mlg: keys.mileage,
    year: keys.year,
    amount: keys.price,
    zip: keys.zipCode,
    createdDate: keys.createDate,
    updatedDate: keys.updateDate
  }
}
