const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  content: { type: String, required: true },
  author: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  rating: { type: Number, min: 1, max: 5 },
  votes: {
    count: { type: Number, default: 0}
  }
});

const placeSchema = new mongoose.Schema({
  name: {type: String, required: true },
  image: {type: String, required: true },
  type: {type: String, required: true },
  price: {type: String, required: true },
  address: {type: String},
  location: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true }
  },
  comments: [ commentSchema ],
  owner: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }

});


placeSchema.virtual('avgRating')
  .get(function() {
    return Math.floor(this.comments.reduce((sum, comment) => {
      return sum + comment.rating;
    }, 0) / this.comments.length);
  });

placeSchema.set('toJSON', {
  virtuals: true
});

module.exports = mongoose.model('Place', placeSchema);
