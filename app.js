const express = require('express')
const Parser = require('./Parser')
var cors = require('cors');

const app = express()

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC

app.use(cors({ optionSuccessStatus: 200 })); // some legacy browsers choke on 204

// static files are served from public
app.use(express.static('public'));

// Use ejs for html templates
app.set('view engine', 'ejs');


// The root url servers the demo homepage
app.get('/', function(request, response) {
  response.render('index', { date: null, url: 'home' });
});


app.get('/api/whoami', (req, res)  => {
  const data = Parser.parseRequest(req)
  res.status(200).send(data)
})

var listener = app.listen(process.env.PORT || 8000, function() {
  console.log('Your app is listening on port ' + listener.address().port)
})
