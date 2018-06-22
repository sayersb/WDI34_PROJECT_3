const Place = require('../model/place');

function indexRoute(req, res, next){
  Place.find()
    .then(places => res.json(places))
    .catch(next);

}

function showRoute(req, res, next){
  Place.findById(req.params.id)
    .then(place => res.json(place))
    .catch(next);
}

function createRoute(req, res, next) {
  Place.create(req.body)
    .then(place => res.json(place))
    .catch(next);
}

function updateRoute(req, res, next) {
  Place.findById(req.params.id)
    .then(place => place.set(req.body))
    .then(place => place.save())
    .then(place => res.json(place))
    .catch(next);
}

function deleteRoute(req, res, next) {
  Place.findById(req.params.id)
    .then(place => place.remove())
    .then(() => res.sendStatus(204))
    .catch(next);

}

module.exports = {

  index: indexRoute,
  show: showRoute,
  create: createRoute,
  update: updateRoute,
  delete: deleteRoute

};
