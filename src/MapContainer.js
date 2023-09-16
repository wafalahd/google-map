// src/MapContainer.js
import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const MapContainer = (props) => {
  // Define an array of marker positions
  const markers = [
    { lat: 37.7749, lng: -122.4194 }, // Marker 1
    { lat: 37.75, lng: -122.40 }, // Marker 2
    // Add more markers as needed
  ];

  return (
    <Map
      google={props.google}
      zoom={14}
      initialCenter={{
        lat: 36.806495, // Replace with your desired latitude
        lng: 10.181532, // Replace with your desired longitude
      }}
    >
     {markers.map((marker, index) => (
          <Marker
            key={index}
            position={{ lat: marker.lat, lng: marker.lng }}
            title={`Marker ${index + 1}`}
          />
        ))}
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyA8RsW0LVfY4q8uIAPyJ9CK3I2R8qjEUuQ',
})(MapContainer);

