import React, { useState } from "react";
import {
  GoogleMap,
  useLoadScript,
  MarkerF,
  InfoWindow,
} from "@react-google-maps/api";
import pin from '../../assets/pin.svg'

const markers = [
  {
    id: 1,
    name: "KFC",
    position: { lat: 42.00479208451505, lng: 21.391100467695704 },
  },
  {
    id: 2,
    name: "Denver, Colorado",
    position: { lat: 41.99762514712089, lng: 21.45188215334494},
  },
  {
    id: 3,
    name: "Los Angeles, California",
    position: { lat: 41.999554674957366, lng: 21.45559433045354},
  },
  {
    id: 4,
    name: "New York, New York",
    position: { lat: 42.02508824509921, lng: 21.42919928445958},
  },
];

const mapContainerStyle = {
  color: 'gray'
}
const stylesArr = [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}];

const SimpleReactMap = () => {
  const [activeMarker, setActiveMarker] = useState(null);

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  const handleOnLoad = (map) => {
    const bounds = new window.google.maps.LatLngBounds();
    markers.forEach(({ position }) => bounds.extend(position));
    map.fitBounds(bounds);
  };

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBeRGuDUKW550N4vKlHAFUPC5z08838S-w",
  });

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <GoogleMap
      zoom={10}
      onLoad={handleOnLoad}
      mapContainerStyle={mapContainerStyle}
      mapContainerClassName="map-container"
      icon={{
        url: pin
      }}
      defaultOptions={{ styles: stylesArr }}
    >
     {markers.map(({ id, name, position }) => (
        <MarkerF
          key={id}
          position={position}
          // onClick={() => handleActiveMarker(id)}
          icon={pin}
        >
          {activeMarker === id ? (
            <InfoWindow onCloseClick={() => setActiveMarker(null)}>
              <div>{name}</div>
            </InfoWindow>
          ) : null}
        </MarkerF>
      ))}
    </GoogleMap>
  );
};

export default SimpleReactMap;
