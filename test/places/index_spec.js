/* global api, describe, it, expect, beforeEach */

const Place = require('../../models/place');
const User = require('../../models/user');

const placeData = [{
  name: 'Juju\'s',
  image: 'http://cdn.ltstatic.com/2017/April/IU843017_942long.jpg',
  type: 'Bar',
  price: '££',
  address: 'E1 6QR',
  location: { lat: 51.4965546, lng: -0.2326328 }
}];

describe('GET /places', () => {
  beforeEach(done => {
    Promise.all([
      User.remove({}),
      Place.remove({})
    ])
      .then(() => Place.create(placeData))
      .then(() => done());
  });

  it('should return a 200 response', done => {
    api
      .get('/api/places')
      .end((err, res) => {
        expect(res.status).to.eq(200);
        done();
      });
  });

  it('should return an array of places', done => {
    api
      .get('/api/places')
      .end((err, res) => {
        expect(res.body).to.be.an('array');
        res.body.forEach(place => {
          expect(place).to.include.keys([
            '_id',
            'name',
            'type',
            'price',
            'location',
            'address'
          ]);
        });
        done();
      });
  });

  it('should return the correct data', done => {
    api
      .get('/api/places')
      .end((err, res) => {
        res.body = res.body.sort((a, b) => a.name > b.name);
        res.body.forEach((place, i) => {
          expect(place.name).to.eq(placeData[i].name);
          expect(place.address).to.eq(placeData[i].address);
          expect(place.location).to.deep.eq(placeData[i].location);
          expect(place.image).to.eq(placeData[i].image);
          expect(place.rating).to.eq(placeData[i].rating);
          expect(place.price).to.eq(placeData[i].price);
        });
        done();
      });
  });
});
