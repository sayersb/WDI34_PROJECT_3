const Place = require('../model/place');

function indexRoute(req, res, next){
  Place.find()
    .then(places => res.json(places))
    .catch(next);

}

function showRoute(req, res, next) {
  
}












module.exports = {

  index: indexRoute

};
