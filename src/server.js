const express = require('express')
const multer = require('multer')
const fileProcessor = require('./fileProcessor')

const upload = multer({ dest: 'uploads/' })
const app = express()

app.post('/files', upload.single('file'), (req, res) => {
  try {
    fileProcessor.emit('fileUploaded', req.file.path, req.body.providerName)
    return res.json({ message: 'File successfuly uploaded' })
  } catch (e) {
    res.status(400).send({ message: e.message })
  }
})

app.listen(3001, () => {
  console.log('Server running on port 3001')
})
