/* global api, describe, it, expect, beforeEach */

const Place = require('../../models/place');
const User = require('../../models/user');
const jwt = require('jsonwebtoken');
const { secret } = require('../../config/environment');

const placeData = [{
  name: 'Life',
  artist: 'Des\'ree',
  releaseDate: '08-06-1998',
  genre: 'Pop',
  album: 'Supernatural'
}, {
  name: 'Would I Lie To You',
  artist: 'Charles and Eddie',
  releaseDate: '04-08-1992',
  genre: 'Pop',
  album: 'Duophonic'
}];

const userData = { username: 'test', email: 'test@test.com', password: 'test', passwordConfirmation: 'test' };
let token;
let place;

describe('PUT /places/:id', () => {
  beforeEach(done => {
    Promise.all([
      User.remove({}),
      Place.remove({})
    ])
      .then(() => Promise.props({
        place: Place.create(placeData[0]),
        user: User.create(userData)
      }))
      .then(data => {
        place = data.place;
        token = jwt.sign({ sub: data.user._id }, secret, { expiresIn: '5m' });
      })
      .then(done);
  });

  it('should return a 401 response', done => {
    api
      .put(`/api/places/${place._id}`)
      .end((err, res) => {
        expect(res.status).to.eq(401);
        done();
      });
  });

  it('should return a 200 response with a token', done => {
    api
      .put(`/api/places/${place._id}`)
      .set('Authorization', `Bearer ${token}`)
      .send(placeData[1])
      .end((err, res) => {
        expect(res.status).to.eq(200);
        done();
      });
  });

  it('should return a place', done => {
    api
      .put(`/api/places/${place._id}`)
      .set('Authorization', `Bearer ${token}`)
      .send(placeData[1])
      .end((err, res) => {
        expect(res.body).to.be.an('object');
        expect(res.body).to.include.keys([
          '_id',
          'name',
          'artist',
          'releaseDate',
          'genre',
          'album'
        ]);
        done();
      });
  });

  it('should return the correct data', done => {
    api
      .put(`/api/places/${place._id}`)
      .set('Authorization', `Bearer ${token}`)
      .send(placeData[1])
      .end((err, res) => {
        expect(res.body.name).to.eq(placeData[1].name);
        expect(res.body.address).to.eq(placeData[1].address);
        expect(res.body.location).to.deep.eq(placeData[1].location);
        expect(res.body.image).to.eq(placeData[1].image);
        expect(res.body.rating).to.eq(placeData[1].rating);
        expect(res.body.price).to.eq(placeData[1].price);
        done();
      });
  });
});
