import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import * as storeData from "./store_directory.json";
/*
* Use this component as a launching-pad to build your functionality.
*
*/

const mapStyles = {
  width: '90vw',
  height: '90vh'
};

export class YourComponent extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     markers: []
  //   }
  // }

  // handleMapClick = (event) => {
  //   this.setState(prevState => ({
  //     markers: [
  //       ...prevState.markers,
  //       {
  //         lat: storeData.Coordinates.lat,
  //         lng: storeData.Coordinates.lng,
  //       },
  //     ],
  //   }));
  // }

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
    return (
      <Map
        google={this.props.google}
        zoom={10}
        style={mapStyles}
        initialCenter={
          {
            // lat: -1.2884,
            // lng: 36.8233
            lat: 19.4550, lng: -99.32707
          }
        }
        // onClick={this.handleMapClick}
      >
        {storeData.map(store => (
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
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

// var divStyle = {
//   border: 'red',
//   borderWidth: 2,
//   borderStyle: 'solid',
//   padding: 20
// };

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCVH8e45o3d-5qmykzdhGKd1-3xYua5D2A'
})(YourComponent);
