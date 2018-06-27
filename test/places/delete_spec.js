/* global api, describe, it, expect, beforeEach */

const Place = require('../../models/place');
const User = require('../../models/user');
const jwt = require('jsonwebtoken');
const { secret } = require('../../config/environment');

const placeData = [{
  name: 'Juju\'s',
  image: 'http://cdn.ltstatic.com/2017/April/IU843017_942long.jpg',
  type: 'Bar',
  price: '££',
  address: 'E1 6QR',
  location: { lat: 51.4965546, lng: -0.2326328 }
}];

const userData = { username: 'Ant', email: 'ant@ant.co', password: 'pass', passwordConfirmation: 'pass' };
let token;
let place;

describe('DELETE /places/:id', () => {
  beforeEach(done => {
    Promise.all([
      User.remove({}),
      Place.remove({})
    ])
      .then(() => Promise.props({
        places: Place.create(placeData),
        user: User.create(userData)
      }))
      .then(data => {
        place = data.places[0];
        token = jwt.sign({ sub: data.user._id }, secret, { expiresIn: '5m' });
      })
      .then(done);
  });

  it('should return a 401 response', done => {
    api
      .delete(`/api/places/${place._id}`)
      .end((err, res) => {
        expect(res.status).to.eq(401);
        done();
      });
  });

  it('should return a 204 response with a token', done => {
    api
      .delete(`/api/places/${place._id}`)
      .set('Authorization', `Bearer ${token}`)
      .end((err, res) => {
        expect(res.status).to.eq(204);
        done();
      });
  });

  it('should return no data', done => {
    api
      .delete(`/api/places/${place._id}`)
      .set('Authorization', `Bearer ${token}`)
      .end((err, res) => {
        expect(res.body).to.be.empty;
        done();
      });
  });
});
