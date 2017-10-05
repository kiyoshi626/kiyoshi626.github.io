const bodyParser = require('body-parser');
const express = require('express');
const models = require('./models.js');
const axios = require('axios');

const STATUS_USER_ERROR = 422;

const server = express();
// to enable parsing of json bodies for post requests
server.use(bodyParser.json());

server.get('/', (req, res) => {
  axios.get(`https://accounts.spotify.com/authorize`)
  .then(response => {
    res.json(response.data);
  })
  .catch(error =>{
    res.json(error);
  })
});

module.exports = { server };