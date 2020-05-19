const providerConfigs = require('./providerConfigs')

class ProviderRepository {
  static getKeyMapOf (providerName) {
    if (providerConfigs[providerName]) {
      return providerConfigs[providerName]
    }
    throw new Error('providerName not found')
  }
}

module.exports = ProviderRepository
