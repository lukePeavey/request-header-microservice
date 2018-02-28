const express = require('express')
const Parser = require('./Parser')

const app = express()

app.get('/', (req, res) => {
  res.redirect('/api/whoami')
})

app.get('/api/whoami', (req, res)  => {
  const data = Parser.parseRequest(req)
  res.status(200).send(data)
})

var listener = app.listen(process.env.PORT || 8000, function() {
  console.log('Your app is listening on port ' + listener.address().port)
})
