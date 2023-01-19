import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'google-maps-react';

class FavoriteList extends React.Component {
    state = {
        favorites: []
    }
    handleMarkerClick = (marker) => {
        this.setState(prevState => ({
            favorites: [...prevState.favorites, marker]
        }))
    }
    render() {
        return (
            <div>
                <h2>Favorite Locations</h2>
                <ul>
                    {this.state.favorites.map((marker, index) => (
                        <li key={index}>
                            {marker.name} - {marker.address}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

class MyMap extends React.Component {
  render() {
    return (
      <div>
        <GoogleMap
          defaultZoom={8}
          defaultCenter={{ lat: 19.4550, lng: -99.32707 }}
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

const WrappedMap = withScriptjs(withGoogleMap(MyMap));

class App extends React.Component {
  render() {
    return (
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyCVH8e45o3d-5qmykzdhGKd1-3xYua5D2A`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        // markers={markers}
      />
    );
  }
}

export default App;
