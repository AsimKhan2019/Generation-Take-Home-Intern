import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import * as storeData from "./store_directory.json";
import { addFavorite } from './slice/favoritesSlice';
import { useDispatch } from 'react-redux';
/*
* Use this component as a launching-pad to build your functionality.
*
*/

const mapStyles = {
  width: '90vw',
  height: '90vh'
};

export class YourComponent extends Component {
  // dispatch = useDispatch();

  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  };

  onMarkerClick = (props, marker, e) => 
  this.setState({
    selectedPlace: props,
    activeMarker: marker, 
    showingInfoWindow: true
  });

  onClose = props => {
    if(this.state.showingInfoWindow){
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };
  
  render() {
    const dispatch = useDispatch();
    return (
      <Map
        google={this.props.google}
        zoom={10}
        style={mapStyles}
        initialCenter={
          {
            lat: 19.4550, lng: -99.32707
          }
        }
      >
        {storeData.forEach(store => (
          <Marker
          onClick={this.onMarkerClick}
          name={store.Name} 
          address={store.Address}
          coordinates={{
            lat: store.Coordinates.lat,
            lng: store.Coordinates.lng
          }}
        />
        ))}

        <InfoWindow
        marker={this.state.activeMarker}
        visible={this.state.showingInfoWindow}
        onClose={this.onClose}
        >
          <div>
            <h4>
              {this.state.selectedPlace.name}
            </h4>
            <h4>
              {this.state.selectedPlace.address}
            </h4>
            <button onClick={dispatch(addFavorite(this.state.selectedPlace.name))}>Add to favorites</button>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCVH8e45o3d-5qmykzdhGKd1-3xYua5D2A'
})(YourComponent);
