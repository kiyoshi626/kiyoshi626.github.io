// Do NOT modify this file; make your changes in server.js.
const mongoose = require('mongoose');
const { server } = require('./server.js');
const port = 5000;

axios({
  url: 'https://accounts.spotify.com/api/token',
  method: 'post',
  params: {
    grant_type: 'client_credentials'
  },
  headers: {
    'Accept':'application/json',
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  auth: {
    username: '4bd8d7f2ed99459b9141c59b8852ff43',
    password: 'b1ee6f2456464caca71319c112769251'
  }
}).then(function(response) {
    console.log(response);
}).catch(function(error) {
});

server.listen(port);
console.log(`Server Listening on ${port}`);