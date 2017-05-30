var axios = require('axios');
var Promise = require('bluebird').Promise;
var googleMaps = require('@google/maps').createClient({
  key: process.env.googleAPI,
  Promise: Promise
});

const stringifyLatLng = (latLng) => {
   return latLng.lat + ',' + latLng.lng;
}

const latLngObj = (step) => {
  return {
    lat: step.lat,
    lng: step.lng
  };
};

const createStepsFromRoute = (route) => {
  let steps = [ latLngObj(route.legs[0].steps[0].start_location) ]
              .concat(route.legs[0].steps.map(leg => latLngObj(leg.end_location))); 

  return steps; 
}

const attachElevation = (steps) => {
  let path = steps.map(stringifyLatLng).join('|');

  return retrieveElevationInfo(path)
  .then(elevationInfo => {
    return Object.assign({steps: steps}, elevationInfo)
  });
}

const retrieveElevationInfo = pathString => {
  url = `https://maps.googleapis.com/maps/api/elevation/json?path=${pathString}&samples=150&key=${process.env.googleAPI}`;
  return axios.get(url)
  .then(results => { 
    return elevationDiff(results.data.results) 
  });
};

//takes an array of elevations in meters and converts the total ascent and descent
const elevationDiff = (elevationArr) => {
  let prev = elevationArr[0].elevation;

  let changes = elevationArr.reduce((accum, distObj) => {
    let change = distObj.elevation - prev;
    if (change > 0) {
      accum.ascent += change;
    } else {
      accum.descent += -change;
    }

    prev = distObj.elevation;
    return accum;
  }, {descent: 0, ascent: 0});

  return {
    ascent: Math.round(changes.ascent * 3.28084),
    descent: Math.round((changes.descent * 3.28084))
  };
};

const getDirections = (origin, destination) => {
  return googleMaps.directions({
    origin: origin,
    destination: destination,
    mode: 'bicycling',
    alternatives: true
  })
  .asPromise()
  .then(results => {
    return results.json.routes.map(route => {
      return createStepsFromRoute(route);
    });
   })
  .then(routesArr => {
    return Promise.all(routesArr.map(attachElevation))
  })
};

module.exports.getDirections = getDirections
