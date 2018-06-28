const mongoose = require('mongoose');


const profileSchema = new mongoose.Schema({
  image: {type: String, required: true },
  about: {type: String, required: true },
  location: {

  }

});

module.exports = mongoose.model('Profile', profileSchema);
