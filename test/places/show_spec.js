/* global api, describe, it, expect, beforeEach */

const Place = require('../../models/place');
const User = require('../../models/user');

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

let place;

describe('GET /places/:id', () => {
  beforeEach(done => {
    Promise.all([
      User.remove({}),
      Place.remove({})
    ])
      .then(() => Place.create(placeData))
      .then(places => place = places[0])
      .then(() => done());
  });

  it('should return a 200 response', done => {
    api
      .get(`/api/places/${place._id}`)
      .expect(200, done);
  });

  it('should return a place', done => {
    api
      .get(`/api/places/${place._id}`)
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
      .get(`/api/places/${place._id}`)
      .end((err, res) => {
        expect(res.body.name).to.eq(placeData[0].name);
        expect(res.body.address).to.eq(placeData[0].address);
        expect(res.body.location).to.deep.eq(placeData[0].location);
        expect(res.body.image).to.eq(placeData[0].image);
        expect(res.body.rating).to.eq(placeData[0].rating);
        expect(res.body.price).to.eq(placeData[0].price);
        done();
      });
  });
});
