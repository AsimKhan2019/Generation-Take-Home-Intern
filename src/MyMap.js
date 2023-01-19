import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

class MyMap extends React.Component {
  render() {
    return (
      <div>
        <GoogleMap
          defaultZoom={8}
          defaultCenter={{ lat: -34.397, lng: 150.644 }}
        >
          {this.props.markers.map((marker, index) => (
            <Marker
              key={index}
              position={marker.position}
              onClick={() => this.props.handleMarkerClick(marker)}
            />
          ))}
        </GoogleMap>
        <FavoriteList handleMarkerClick={this.handleMarkerClick} />
      </div>
    );
  }
}

