const rp = require('request-promise'); //yarn added

function forecast(req, res, next) {

  console.log(req.query);

  rp({
    method: 'GET',
    url: `https://api.darksky.net/forecast/95fcc9cb5337a0c474ad27f84673242f/${req.query.lat},${req.query.lng}`,
    json: true,
    qs: {
      units: 'si'
    }
  })
    .then(response => res.json(response.currently))
    .catch(next);
}

module.exports = {
  forecast
};
