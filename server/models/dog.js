const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dogSchema = new Schema({
  name: String,
  tagline: String,
  img: String
});

const DogClass = mongoose.model('dog', dogSchema);

module.exports = DogClass;
