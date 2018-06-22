const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const Place = require('../models/place');
const User = require('../models/user');
const { dbURI } = require('../config/environment');

mongoose.connect(dbURI, (err, db) => {
  db.dropDatabase();

  User.create([{
    username: 'brad',
    email: 'brad@brad.co',
    password: 'pass',
    passwordConfirmation: 'pass'
  }, {
    username: 'josh',
    email: 'josh@josh.co',
    password: 'pass',
    passwordConfirmation: 'pass'
  }, {
    username: 'ant',
    email: 'ant@ant.co',
    password: 'pass',
    passwordConfirmation: 'pass'
  }])
    .then(users => {
      console.log('User created');
      return Place.create([{
        name: 'Juju/s',
        image: 'http://cdn.ltstatic.com/2017/April/IU843017_942long.jpg',
        type: 'Bar',
        price: '££',
        address: 'E1 6QR',
        location: { lat: 51.4965546, lng: -0.2326328 },
        owner: users[0],
        comments: [{
          content: 'Worst bar in London',
          rating: 1,
          author: users[1]
        }, {
          content: 'Best bar in London',
          rating: 5,
          author: users[1]
        }]
      }, {
        name: 'Campania',
        image: 'https://i.guim.co.uk/img/media/182a60fe758a6e9054d83f316ed61480fa44035e/0_651_4381_2629/master/4381.jpg?w=620&q=20&auto=format&usm=12&fit=max&dpr=2&s=11dc55d8266e78bf90f87db665aa0152',
        type: 'Restaurant',
        price: '£££',
        address: 'E2 7RH',
        location: {
          lat: 51.5297036,
          lng: -0.0696633
        },
        owner: users[1],
        comments: [{
          content: 'Amazing homemade pasta',
          rating: 4,
          author: users[0]
        }]
      }]);

    })
    .then(places => console.log(`${places.length} place(s) created`))
    .catch(err => console.log(err))
    .finally(() =>  mongoose.connection.close());
});
