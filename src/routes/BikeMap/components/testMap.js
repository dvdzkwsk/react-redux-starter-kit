import { withGoogleMap, GoogleMap, Marker, Polyline } from "react-google-maps";
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

let samplePath = 
  [{
        "lat": 37.7690564,
        "lng": -122.4506363
      },
      {
        "lat": 37.7695354,
        "lng": -122.4507359
      },
      {
        "lat": 37.7696002,
        "lng": -122.450244
      },
      {
        "lat": 37.770529,
        "lng": -122.4504334
      },
      {
        "lat": 37.7739163,
        "lng": -122.4238142
      },
      {
        "lat": 37.7767142,
        "lng": -122.4243971
      },
      {
        "lat": 37.7766779,
        "lng": -122.4246641
      },
      {
        "lat": 37.777618,
        "lng": -122.4248359
      },
      {
        "lat": 37.7784944,
        "lng": -122.4182568
      },
      {
        "lat": 37.7831079,
        "lng": -122.419195
      },
      {
        "lat": 37.7844603,
        "lng": -122.4085608
      },
      {
        "lat": 37.7840081,
        "lng": -122.408092
      },
      {
        "lat": 37.7834842,
        "lng": -122.4087433
      }];

// Wrap all `react-google-maps` components with `withGoogleMap` HOC
// and name it GettingStartedGoogleMap
const SimpleMapExampleGoogleMap = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={16}
    defaultCenter={{
    "lat": 37.7695354,
    "lng": -122.4507359
  }}
  >
  <Polyline
    path={samplePath}
    options={{
      strokeColor: 'orange'
    }}
  />
  </GoogleMap>
));

class SimpleMapExample extends Component {
  render() {
    return (
      <SimpleMapExampleGoogleMap
        containerElement={
          <div style={{ height: `1000px` }} />
        }
        mapElement={
          <div style={{ height: `1000px` }} />
        }
      />
    );
  }
}

export default SimpleMapExample;