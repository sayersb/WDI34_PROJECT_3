const mongoose = require('mongoose');


const profileSchema = new mongoose.Schema({
  image: {type: String, required: true },
  about: {type: String, required: true },
  location: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true }
  }

});

module.exports = mongoose.model('Profile', profileSchema);
