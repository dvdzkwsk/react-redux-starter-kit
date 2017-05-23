var axios = require('axios');
var Promise = require('bluebird').Promise;
var googleMaps = require('@google/maps').createClient({
  key: process.env.googleAPI,
  Promise: Promise
});

//returns an array of polylines
const getPolylines = (origin, destination) => {
  return googleMaps.directions({
    origin: origin,
    destination: destination,
    mode: 'bicycling',
    alternatives: true
  })
  .asPromise()
  .then(results => {
    return results.json.routes.map(route => {
      return route.overview_polyline.points;
    }) 
  })
}

const retrieveElevationInfo = poly => {
  url = `https://maps.googleapis.com/maps/api/elevation/json?locations=enc:${poly}&key=${process.env.googleAPI}`
  return axios.get(url)
  .then(results => { 
    return {
      poly: poly, 
      elevation: elevationDiff(results.data.results) 
    }
  });
}

//takes an array of elevations in meters and converts the total ascent and descent
const elevationDiff = (elevationArr) => {
  let prev = elevationArr[0].elevation;

  let changes = elevationArr.reduce((accum, distObj) => {
    let change = distObj.elevation - prev;
    if (change > 0) {
      accum.climb += change;
    } else {
      accum.descent += change;
    }

    prev = distObj.elevation;
    return accum;
  }, {descent: 0, climb: 0});

  return {
    climb: Math.round(changes.climb * 3.28084),
    descent: Math.round((changes.descent * 3.28084))
  }
}

const retrieveRouteInfo = (origin, destination) => {
  let routes;

  getPolylines(origin, destination)
  .then(polys => {
    return Promise.all(polys.map(retrieveElevationInfo))
  })
  .then(console.log);
}

retrieveRouteInfo('631 cole street, sf', '944 market st, sf, ca');




