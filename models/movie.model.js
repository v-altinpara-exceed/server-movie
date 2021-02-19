const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let MovieSchema = new Schema({
  nameMovie: {type: String, required: true, max: 100},
  descriptionMovie: {type: String, required: true},
  genreMovie: {type: String, required: true, max: 100},
  posterMovie: {type: String, required: true},
});


// Export the model
module.exports = mongoose.model('Movies', MovieSchema);