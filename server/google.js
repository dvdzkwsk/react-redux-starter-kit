var axios = require('axios');
var googleMaps = require('@google/maps').createClient({
  key: process.env.googleAPI,
  Promise: require('bluebird').Promise
});

googleMaps.directions({
  origin:'1262 page st, sf, ca',
  destination: '855 page st, sf, ca',
  mode: 'bicycling'
})
.asPromise()
.then(results => {
  console.log('routes', results.json.routes[0].overview_polyline)
  console.log('routes.legs', results.json.routes[0])
  console.log('routes.legs', results.json.routes[0].legs[0])
  console.log('waypoints', results.json.geocoded_waypoints)
})


const wp  = 'swoeFnckjV_BRKcByDd@i@gI{@uM_AcOgD}g@_Ci^wAqTuBq\\Gi@ASOBuC\\g@H}Dd@}ARu@JMBDr@{Db@cAgPy@cLi@_HEw@eD`@uC\\iIbAuGt@sAoSi@iI}B{]QwCJCHEd@m@\\e@t@`An@|@B@'
const test = 'wgpeFnkijVoD}i@'
//path2 i copied from results.json.geocoded_waypoints


axios.get(`https://maps.googleapis.com/maps/api/elevation/json?locations=enc:${test}&key=${process.env.googleAPI}`)
.then(res => console.log(elevationDiff(res.data.results)))

const elevationDiff = (elevationArr) => {
  let prev = elevationArr[0].elevation;

  let change = elevationArr.reduce((accum, distObj) => {
    let change = distObj.elevation - prev;
    if (change > 0) {
      accum.gain += change;
    } else {
      accum.loss += -change;
    }

    prev = distObj.elevation;
    return accum;
  }, 
  {gain: 0, loss: 0})

  return {
    gain: change.gain * 3.28,
    loss: change.loss * 3.28
  }
}

