// import React from 'react';
// import ReactDOM from 'react-dom';

// export default class SearchBox extends React.Component {
//   static propTypes = {
//     placeholder: React.PropTypes.string,
//     onPlacesChanged: React.PropTypes.func
//   }
//   render() {
//     return <input ref="input" {...this.props} type="text"/>;
//   }
//   onPlacesChanged = () => {
//     if (this.props.onPlacesChanged) {
//       console.log(this.searchBox.getPlaces());
//       this.props.onPlacesChanged(this.searchBox.getPlaces());
//     }
//   }
//   componentDidMount() {
//     var input = ReactDOM.findDOMNode(this.refs.input);
//     this.searchBox = new google.maps.places.SearchBox(input);
//     this.searchBox.addListener('places_changed', this.onPlacesChanged);
//   }
//   componentWillUnmount() {
//     this.searchBox.removeListener('places_changed', this.onPlacesChanged);
//   }
// }