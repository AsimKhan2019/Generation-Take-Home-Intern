import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

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
