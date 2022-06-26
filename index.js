const express = require('express')
const server = express()

server.get('/test', (req, res) => {
  res.send('hola11')
})

server.listen(3000, () => {
  console.log('running')
})