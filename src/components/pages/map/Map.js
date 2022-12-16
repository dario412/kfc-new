import React from 'react'
import SimpleReactMap from '../../simple-react-map/SimpleReactMap'
import MapDetails from './MapDetails/MapDetails'

const mapDetailsList = [
  
     'East Gate Mall',
     'Lovkjenska 9',
    // number: '077829187'

  // {
  //   title: 'East Gate Mall',
  //   address: 'Lovkjenska 9',
  //   number: '077829187'
  // }
]

const Map = () => {
  window.scrollTo({top: 0, behavior: 'smooth'});

  return (
    <div>
        <MapDetails mapDetailsList={mapDetailsList}/>
        <SimpleReactMap/>
    </div>
  )
}

export default Map