const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ModelsSchema = Schema({
  id: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
})

module.exports = mongoose.model('Models', ModelsSchema);