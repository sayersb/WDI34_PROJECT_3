const router = require('express').Router();
const profile = require('../controllers/profile');
const places = require('../controllers/places');
const auth = require('../controllers/auth');
const darksky = require('../controllers/darksky');
const secureRoute = require('../lib/secureRoute');


router.route('/places')
  .get(places.index)
  .post(secureRoute, places.create);

router.route('/places/:id')
  .get(places.show)
  .put(secureRoute, places.update)
  .delete(secureRoute, places.delete);

router.post('/places/:id/comments', secureRoute, places.commentCreate);

router.route('/places/:id/comments/:commentId')
  .delete(secureRoute, places.commentDelete)
  .put(secureRoute, places.vote);

router.get('/profile', secureRoute, auth.profile);

router.get('/forecast', darksky.forecast);

router.route('/register')
  .post(auth.register);

router.route('/login')
  .post(auth.login);

router.route('/profile')
  .get(profile.index);
  


module.exports = router;
