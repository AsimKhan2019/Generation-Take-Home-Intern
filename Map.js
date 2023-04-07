import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 37.7749,
      lng: -122.4194
    },
    zoom: 12
  };

  constructor(props) {
    super(props);
    this.state = {
      markers: []
    };
  }

  handleMapClick = ({ x, y, lat, lng, event }) => {
    const markers = [...this.state.markers, { lat, lng }];
    this.setState({ markers });
    localStorage.setItem('markers', JSON.stringify(markers));
  };

  render() {
    const { markers } = this.state;
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          onClick={this.handleMapClick}
        >
          {markers.map((marker, index) => (
            <Marker
              key={index}
              lat={marker.lat}
              lng={marker.lng}
            />
          ))}
        </GoogleMapReact>
      </div>
    );
  }
}

const Marker = () => <div className="marker">📍</div>;

export default Map;
