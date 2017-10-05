// Do NOT modify this file; make your changes in server.js.
const mongoose = require('mongoose');
const { server } = require('./server.js');
const port = 5000;

var request = require('request'); // "Request" library

var client_id = '4bd8d7f2ed99459b9141c59b8852ff43'; // Your client id
var client_secret = 'b1ee6f2456464caca71319c112769251'; // Your secret

// your application requests authorization
var authOptions = {
  url: 'https://accounts.spotify.com/api/token',
  headers: {
    'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
  },
  form: {
    grant_type: 'client_credentials'
  },
  json: true
};

request.post(authOptions, function(error, response, body) {
  if (!error && response.statusCode === 200) {

    // use the access token to access the Spotify Web API
    var token = body.access_token;
    var options = {
      url: 'https://api.spotify.com/v1/users/jmperezperez',
      headers: {
        'Authorization': 'Bearer ' + token
      },
      json: true
    };
    request.get(options, function(error, response, body) {
      console.log(body);
    });
  }
}

mongoose.Promise = global.Promise;
const connect = mongoose.connect(
  'mongodb://localhost/data', 
  { useMongoClient: true }
);
  
server.listen(port);
console.log(`Server Listening on ${port}`);