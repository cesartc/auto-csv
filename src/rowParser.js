class RowParser {
  constructor (keyMap) {
    this.keyMap = keyMap
  }

  parse (row) {
    const parsedRow = {}
    Object.keys(this.keyMap).forEach(key => {
      if (typeof row[key] !== 'undefined') { parsedRow[this.keyMap[key]] = row[key] }
    })
    return parsedRow
  }
}

module.exports = RowParser
