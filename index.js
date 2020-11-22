const express = require('express');
const app = express();
const port = 3000;
const getUniqueNumbers = require('./api/index');


// Static Files
app.use(express.static('public'));

// Dynamic render
app.get('/dynamic', function (req, res) {
  res.send(`<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
    <h1>${new Date()}</h1>
  </body>
  </html>`);
});

// REST API
app.get('/unique', (req, res) => {
  res.send(getUniqueNumbers());
});


app.listen(port, () => {
  console.log(`Radium app listening at http://localhost:${port}`);
});
