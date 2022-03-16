const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

app.get('/', (req, res) => {
  res.send('<h1>...it was neither possible for necessary\nto educate people who never questioned anything</h1>');
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});
