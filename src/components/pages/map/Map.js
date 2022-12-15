import React from 'react'
import SimpleReactMap from '../../simple-react-map/SimpleReactMap'
import MapDetails from './MapDetails/MapDetails'

const mapDetailsList = [
    'a',
    'b',
    'c',
    'a',
    'b',
    'c',
    'a',
    'b',
    'c',
]

const Map = () => {
  return (
    <div>
        <MapDetails mapDetailsList={mapDetailsList}/>
        <SimpleReactMap/>
    </div>
  )
}

export default Map