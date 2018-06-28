const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const Place = require('../models/place');
const User = require('../models/user');
const { dbURI } = require('../config/environment');

mongoose.connect(dbURI, (err, db) => {
  db.dropDatabase();

  User.create([{
    username: 'Brad',
    email: 'brad@brad.co',
    password: 'pass',
    passwordConfirmation: 'pass'
  }, {
    username: 'Josh',
    email: 'josh@josh.co',
    password: 'pass',
    passwordConfirmation: 'pass'
  }, {
    username: 'Ant',
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
        price: '££',
        address: 'E1 6QR',
        location: { lat: 51.5207005, lng: -0.0737281 },
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
        image: 'http://www.doitinlondon.co.uk/files/2016/GUEST/LAPP/campania-exterior.jpg',
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
      }, {
        name: 'Genesis',
        image: 'https://hirespace.com/blog/content/images/2015/03/Genesis-Cinema-5--2-.jpg',
        type: 'Cinema',
        price: '££',
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
        image: 'http://cdn.ltstatic.com/2017/October/FH865275_942long.jpg',
        type: 'Market',
        price: '££',
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
        price: '£',
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
      }, {
        name: 'Bang Bang Oriental Foodhall',
        image: 'https://cdn.thenudge.com/wp-content/uploads/2017/03/bang-bang-oriental-1920x849.jpg',
        type: 'Market',
        price: '£',
        address: 'NW9 0FH',
        location: {
          lat: 51.593471,
          lng: -0.261697
        },
        owner: users[2],
        comments: [{
          content: 'Amazing selection of Asian cuisine, come hungry!',
          rating: 5,
          author: users[2]
        }]
      }, {
        name: 'Backyard Cinema',
        image: 'http://theresident.wpms.greatbritishlife.co.uk/wp-content/uploads/sites/10/2016/09/Backyard-Cinema-Lost-World-.jpg',
        type: 'Cinema',
        price: '£££',
        address: 'SE1 6DR',
        location: {
          lat: 51.4987099,
          lng: -0.0985963
        },
        owner: users[2],
        comments: [{
          content: 'Variety of iconic, unusual and immersive locations both in and outdoors around London, each show is  totally unique!',
          rating: 5,
          author: users[2]
        }]
      }, {
        name: 'Mother Clucker',
        image: 'https://smhttp-ssl-33667.nexcesscdn.net/manual/wp-content/uploads/2015/10/IMG_3554-1050x700.jpg',
        type: 'Restaurant',
        price: '££',
        address: 'E1 6NJ',
        location: {
          lat: 51.5210851,
          lng: -0.07317
        },
        owner: users[1],
        comments: [{
          content: 'Unreal tea brined, twice fried chicken',
          rating: 4,
          author: users[1]
        }]
      }, {
        name: 'The Mayor of Scaredy Cat Town',
        image: 'http://finchinteriors.co.uk/wp-content/uploads/2014/06/finch-interiors-breakfast-club-spitalfields-2.jpg',
        type: 'Bar',
        price: '££',
        address: 'E1 7LS',
        location: {
          lat: 51.5183722,
          lng: -0.0809602
        },
        owner: users[1],
        comments: [{
          content: 'Cocktails served in this basement bar, hidden THROUGH a fridge door in the restaurant',
          rating: 4,
          author: users[1]
        }]
      }, {
        name: 'Kyoto Garden',
        image: 'https://thumbs.dreamstime.com/b/japanese-garden-london-kyoto-holland-park-uk-53662723.jpg',
        type: 'Park',
        price: '£',
        address: 'E1 7LS',
        location: {
          lat: 51.5029922,
          lng: -0.2046902
        },
        owner: users[1],
        comments: [{
          content: 'Secret Japanese garden in Holland Park, hopefully you come across the Peacocks! ',
          rating: 4,
          author: users[1]
        }]
      }, {
        name: 'Hootananny Brixton',
        image: 'http://www.hootanannybrixton.co.uk/wp-content/uploads/2014/05/beer-garden.jpg',
        type: 'Bar',
        price: '£',
        address: 'SW2 1DF',
        location: {
          lat: 51.4553793,
          lng: -0.11325
        },
        owner: users[1],
        comments: [{
          content: 'Late night bar and music venue, several acts a night ranging from reggae to punk',
          rating: 5,
          author: users[1]
        }]
      }, {
        name: 'Netil 360',
        image: 'https://d37219swed47g7.cloudfront.net/media/images/guides/the-london-rooftop-bar-rankings/banners/1497216187.9.jpg',
        type: 'Bar',
        price: '££',
        address: 'E8 3RL',
        location: {
          lat: 51.5375831,
          lng: -0.05771
        },
        owner: users[1],
        comments: [{
          content: 'Rooftop bar with amazing views and a wood oven for Pizzas',
          rating: 5,
          author: users[1]
        }]
      }, {
        name: 'Bounce',
        image: 'https://static.designmynight.com/uploads/2017/12/G16A8035-1200x800.jpg',
        type: 'Bar',
        price: '££',
        address: 'EC1N 2TD',
        location: {
          lat: 51.5179795,
          lng: -0.1082477
        },
        owner: users[1],
        comments: [{
          content: '1950s-style cocktail bar and pizza restaurant with red leather booths and 17 ping pong tables. Pizzas',
          rating: 5,
          author: users[1]
        }]
      }, {
        name: 'Coppa Club',
        image: 'http://cdn.ltstatic.com/2017/October/NM101370_942long.jpg',
        type: 'Bar',
        price: '££',
        address: 'EC3R 6AH',
        location: {
          lat: 51.508148,
          lng: -0.079692
        },
        owner: users[1],
        comments: [{
          content: 'Coppa Club is a space for eating, drinking, meeting and unwinding. Built around a central, brass bar that’s open on all-sides, Coppa Club has a raised lounge for working and winding down, a 250-cover restaurant with a marble herringbone floor, and a café with booths and a fireplace.',
          rating: 4,
          author: users[1]
        }]
      }, {
        name: 'Pitt Cue',
        image: 'http://www.pittcue.co.uk/gallery/PC7.jpg',
        type: 'Restaurant',
        price: '£££',
        address: 'EC2M 4YP',
        location: {
          lat: 51.516396,
          lng: -0.078267
        },
        owner: users[1],
        comments: [{
          content: 'Pitt Cue has been on an incredible journey: launched as a food truck on the southbank, we evolved into a tiny bricks-and-mortar site in soho and now, finally, have matured into a full-blown restaurant with an expanded kitchen and extended bar.',
          rating: 4,
          author: users[1]
        }]
      }, {
        name: 'Ballie Ballerson',
        image: 'https://hirespace.imgix.net/spaces/161986/1cnn4cr5n1v.jpg?h=1080&w=1920&auto=format&fit=crop&q=40',
        type: 'Bar',
        price: '££',
        address: 'EC2A 3BS',
        location: {
          lat: 51.525564,
          lng: -0.080573
        },
        owner: users[1],
        comments: [{
          content: 'Ballie Ballerson is a ball pit cocktail bar with one million balls, retro sweetie cocktails and damn sexy food - Ballie Ballerson is the ultimate adult playground to get loose.',
          rating: 3,
          author: users[1]
        }]
      }, {
        name: 'Underbelly Festival',
        image: 'http://www.underbellyfestival.com/images/resized/images/uploads/Site_wide_london_eye_1280x800.jpg',
        type: 'Festival',
        price: '£',
        address: 'SE1 8XX',
        location: {
          lat: 51.5051274,
          lng: -0.1177629
        },
        owner: users[1],
        comments: [{
          content: 'Enjoy a fun-packed festival of live entertainment and alfresco eating and drinking at Underbelly Festival in South Bank.',
          rating: 4,
          author: users[1]
        }]
      }, {
        name: 'House of Vans',
        image: 'https://media.timeout.com/images/103848986/image.jpg',
        type: 'Venue',
        price: '£',
        address: 'SE1 8SW',
        location: {
          lat: 51.5005901,
          lng: -0.1141531
        },
        owner: users[1],
        comments: [{
          content: 'It’s a place where imagination lets loose over concrete bowls, art installations, workshops and concert stages, inspiring every person who runs, rolls, or stomps through its door.',
          rating: 4,
          author: users[1]
        }]
      }]);

    })
    .then(places => console.log(`${places.length} place(s) created`))
    .catch(err => console.log(err))
    .finally(() =>  mongoose.connection.close());
});
