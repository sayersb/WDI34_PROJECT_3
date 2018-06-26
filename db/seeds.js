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
        name: 'Juju\'s',
        image: 'http://cdn.ltstatic.com/2017/April/IU843017_942long.jpg',
        type: 'Bar',
        price: 3,
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
          author: users[2]
        }]
      }, {
        name: 'Campania',
        image: 'https://i.guim.co.uk/img/media/182a60fe758a6e9054d83f316ed61480fa44035e/0_651_4381_2629/master/4381.jpg?w=620&q=20&auto=format&usm=12&fit=max&dpr=2&s=11dc55d8266e78bf90f87db665aa0152',
        type: 'Restaurant',
        price: 4,
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
      }, {
        name: 'Genesis',
        image: 'https://images.savoysystems.co.uk/GEN/33521.jpg',
        type: 'Cinema',
        price: 3,
        address: 'E1 4UJ',
        location: {
          lat: 51.5211587,
          lng: -0.0511273
        },
        owner: users[1],
        comments: [{
          content: 'All tickets a fiver on Wednesdays!',
          rating: 4,
          author: users[0]
        }]
      }, {
        name: 'Borough Market',
        image: 'http://earthyphotography.com/wp-content/uploads/2012/07/120721-borough-market-london-01(pp_w768_h512).jpg',
        type: 'Market',
        price: 3,
        address: 'SE1 1TL',
        location: {
          lat: 51.50544,
          lng: -0.0910606
        },
        owner: users[1],
        comments: [{
          content: 'Best food market in London',
          rating: 4,
          author: users[0]
        }]
      }, {
        name: 'Hackney City Farm',
        image: 'http://2.bp.blogspot.com/-EB3KFXMO-rY/U1Ziyp3yCDI/AAAAAAAAH9k/LV3szd-hJ9M/s1600/London-Hackney-City-Farm.jpg',
        type: 'Farm',
        price: 1,
        address: 'E2 8QA',
        location: {
          lat: 51.5316725,
          lng: -0.0668395
        },
        owner: users[1],
        comments: [{
          content: 'Free farm filled with all the animals you can imagine... right in the middle of the city!',
          rating: 5,
          author: users[0]
        }]
      }]);

    })
    .then(places => console.log(`${places.length} place(s) created`))
    .catch(err => console.log(err))
    .finally(() =>  mongoose.connection.close());
});
