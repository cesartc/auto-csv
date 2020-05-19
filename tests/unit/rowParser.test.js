const RowParser = require('../../src/rowParser')

describe('parse', () => {
  it('should take only required columns when more are given', () => {
    const keyMap = {
      '_id': 'uuid',
      'kms': 'mileage',
      'year': 'year'
    }
    const rowParser = new RowParser(keyMap)
    const givenRow = {
      '_id': '8s5a125a',
      'color': 'red',
      'year': '2017',
      'kms': '30000',
      'wheels': '4'
    }
    const expectedParsedRow = {
      'uuid': givenRow._id,
      'mileage': givenRow.kms,
      'year': givenRow.year
    }
    expect(rowParser.parse(givenRow)).toStrictEqual(expectedParsedRow)
  })

  it('should take only required columns when less columns are given', () => {
    const keyMap = {
      '_id': 'uuid',
      'kms': 'mileage',
      'year': 'year',
      'model': 'model'
    }
    const rowParser = new RowParser(keyMap)
    const givenRow = {
      '_id': '8s5a125a',
      'kms': '60000',
    }
    const expectedParsedRow = {
      'uuid': givenRow._id,
      'mileage': givenRow.kms,
    }
    expect(rowParser.parse(givenRow)).toStrictEqual(expectedParsedRow)
  })
})