import React from "react";
import MapDetailItem from './MapDetailItem'
import './MapDetails.css'

const MapDetails = ({ mapDetailsList }) => {
  return (
    <div className="map-details">
      {mapDetailsList.map((title, address, index) => {
        return <MapDetailItem key={index} title={title} address={address}></MapDetailItem>;
      })}
    </div>
  );
};

export default MapDetails;
