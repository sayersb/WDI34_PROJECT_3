const Profile = require('../models/profile');

function profileIndexRoute(req, res, next){
  Profile.find()
    .then(profiles => res.json(profiles))
    .catch(next);
}

function profileShowRoute(req, res, next){
  Profile.findById(req.params.id)
    .then(profile => res.json(profile))
    .catch(next);
}

function profileCreateRoute(req, res, next) {
  req.body.owner = req.currentUser;
  Profile.create(req.body)
    .then(profile => res.json(profile))
    .catch(next);
}

function profileUpdateRoute(req, res, next) {
  Profile.findById(req.params.id)
    .then(profile => profile.set(req.body))
    .then(profile => profile.save())
    .then(profile => res.json(profile))
    .catch(next);
}

function profileDeleteRoute(req, res, next) {
  Profile.findById(req.params.id)
    .then(profile => profile.remove())
    .then(() => res.sendStatus(204))
    .catch(next);
}

module.exports = {

  index: profileIndexRoute,
  show: profileShowRoute,
  create: profileCreateRoute,
  update: profileUpdateRoute,
  delete: profileDeleteRoute
};
