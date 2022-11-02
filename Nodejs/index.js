const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hi there ~Overwatch Winston')
})

app.get('/where', (req, res) => {
    res.send('here')
  })

app.listen(port, () => {
  console.log(`heard`)
})
