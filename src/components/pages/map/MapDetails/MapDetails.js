import React from "react";
import MapDetailItem from './MapDetailItem'
import './MapDetails.css'

const MapDetails = ({ mapDetailsList }) => {
  return (
    <div className="map-details">
        <MapDetailItem  title={'EAST GATE MALL'} address={'Беласица 2, 100 Скопје'} number={'077123123'}></MapDetailItem>

        <MapDetailItem  title={'SKOPJE CITY MALL'} address={'Љубљанска 4, 100 Скопје'} number={'077123123'}></MapDetailItem>

        <MapDetailItem  title={'PALMA MALL TETOVO'} address={'Илирија ББ, Тетово'} number={'077123123'}></MapDetailItem>

        <MapDetailItem  title={'KFC DRIVE THRU RETAIL POINT'} address={'Македонско Косовска Бригада, 100 Скопје'} number={'077123123'}></MapDetailItem>

        <MapDetailItem  title={'KFC DRIVE THRU OKTA'} address={'Александар Македонски 10, 100 Скопје'} number={'077123123'}></MapDetailItem>
    </div>
  );
};

export default MapDetails;
