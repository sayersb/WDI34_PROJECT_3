/* global describe, it, expect, api, beforeEach */

const User = require('../../models/user');
const jwt = require('jsonwebtoken');
const { secret } = require('../../config/environment');

const Place = require('../../models/place');
const placeData = {
  name: 'Juju\'s',
  image: 'http://cdn.ltstatic.com/2017/April/IU843017_942long.jpg',
  type: 'Bar',
  price: '££',
  address: 'E1 6QR',
  location: { lat: 51.4965546, lng: -0.2326328 }
};

let token;


describe('POST /places', () => {

  beforeEach(done => {
    Place.remove({})
      .then(() => User.remove({}))
      .then(() => User.create({
        username: 'test',
        email: 'test',
        password: 'test',
        passwordConfirmation: 'test'
      }))
      .then(user => {
        token = jwt.sign({ sub: user._id }, secret, { expiresIn: '6h' });
        done();
      });
  });

  it('should return a 401 response without a token', done => {
    api.post('/api/places')
      .end((err, res) => {
        expect(res.status).to.eq(401);
        done();
      });
  });

  it('should return a 201 response', done => {
    api.post('/api/places')
      .set('Authorization', `Bearer ${token}`)
      .end((err, res) => {
        expect(res.status).to.eq(201);
        done();
      });
  });

  it('should return an object', done => {
    api.post('/api/places')
      .set('Authorization', `Bearer ${token}`)
      .send(placeData)
      .end((err, res) => {
        expect(res.body).to.be.an('object');
        done();
      });
  });

  it('should return the correct data', done => {
    api.post('/api/places')
      .set('Authorization', `Bearer ${token}`)
      .send(placeData)
      .end((err, res) => {
        expect(res.body.name).to.eq(placeData.name);
        expect(res.body.image).to.eq(placeData.image);
        expect(res.body.type).to.eq(placeData.type);
        expect(res.body.price).to.eq(placeData.price);
        expect(res.body.address).to.eq(placeData.address);
        expect(res.body.location).to.deep.eq(placeData.location);
        done();
      });
  });
});
