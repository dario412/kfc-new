import React from "react";
import MapDetailItem from './MapDetailItem'
import './MapDetails.css'

const MapDetails = ({ mapDetailsList }) => {
  return (
    <div className="map-details">
      {mapDetailsList.map((x, index) => {
        return <MapDetailItem key={index} x={x}></MapDetailItem>;
      })}
    </div>
  );
};

export default MapDetails;
