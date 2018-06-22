const Place = require('../models/place');

function indexRoute(req, res, next){
  Place.find()
    .then(places => res.json(places))
    .catch(next);

}

function showRoute(req, res, next){
  Place.findById(req.params.id)
    .populate('comments.author')
    .then(place => res.json(place))
    .catch(next);
}

function createRoute(req, res, next) {
  req.body.owner = req.currentUser;
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

function commentCreateRoute(req, res, next) {
  req.body.author = req.currentUser;
  Place.findById(req.params.id)
    .populate('comments.author')
    .then(place => {
      place.comments.push(req.body);
      return place.save();
    })
    .then(place => res.json(place))
    .catch(next);
}

function commentDeleteRoute(req, res, next) {
  Place.findById(req.params.id)
    .then(place => {
      const comment = place.comments.id(req.params.commentId);
      comment.remove();
      return place.save();
    })
    .then(place => res.json(place))
    .catch(next);

}


module.exports = {

  index: indexRoute,
  show: showRoute,
  create: createRoute,
  update: updateRoute,
  delete: deleteRoute,
  commentCreate: commentCreateRoute,
  commentDelete: commentDeleteRoute

};
