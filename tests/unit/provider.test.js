const ProviderRepository = require('../../src/repositories/providerRepository')

describe('getKeyMap', () => {
  it('should return a the key map when the providerName is found', () => {
    const providerName = 'NeoAuto'
    const actualKeyMap = ProviderRepository.getKeyMapOf(providerName)
    expect(typeof actualKeyMap).toEqual('object')
  })

  it('should throw an error when providerName is not found', () => {
    expect(() => ProviderRepository.getKeyMapOf('INVALID_PROVIDER_NAME')).toThrowError(/providerName not found/)
  })
})