const Profile = require('../models/profile');

function indexRoute(req, res, next){
  Profile.find()
    .then(profiles => res.json(profiles))
    .catch(next);

}

function showRoute(req, res, next){
  Profile.findById(req.params.id)
    .then(profile => res.json(profile))
    .catch(next);
}

function createRoute(req, res, next) {
  req.body.owner = req.currentUser;
  Profile.create(req.body)
    .then(profile => res.json(profile))
    .catch(next);
}

function updateRoute(req, res, next) {
  Profile.findById(req.params.id)
    .then(profile => profile.set(req.body))
    .then(profile => profile.save())
    .then(profile => res.json(profile))
    .catch(next); 
}

function deleteRoute(req, res, next) {
  Profile.findById(req.params.id)
    .then(profile => profile.remove())
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
