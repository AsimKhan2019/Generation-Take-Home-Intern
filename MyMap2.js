import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import { setMarkerLocation, setMarkers } from './markerSlice';
import markers from './store.json';

class MyMap2 extends Component {
  componentDidMount() {
    const { setMarkers } = this.props;
    setMarkers(markers);
  }

  handleMarkerClick = (marker) => {
    const { setMarkerLocation } = this.props;
    const location = prompt('Enter location information:');
    setMarkerLocation({ marker, location });
  }

  render() {
    const { markers } = this.props;
    return (
      <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: 19.4550, lng: -99.32707 }}
      >
        {markers.map((marker, index) => (
          <Marker
            key={index}
            position={marker.position}
            onClick={() => this.handleMarkerClick(marker)}
            label={marker.location}
          />
        ))}
      </GoogleMap>
    );
  }
}

const mapStateToProps = state => ({
  markers: state.markers,
});

const mapDispatchToProps = { setMarkers, setMarkerLocation };

const WrappedMap = withScriptjs(withGoogleMap(connect(mapStateToProps, mapDispatchToProps)(MyMap)));

class App extends React.Component {
  render() {
    return (
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyCVH8e45o3d-5qmykzdhGKd1-3xYua5D2A`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    );
  }
}

export default App;
