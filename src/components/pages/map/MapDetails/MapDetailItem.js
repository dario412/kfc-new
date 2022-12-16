import { Typography } from '@mui/material'
import React from 'react'
import './MapDetailItem.css'
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';

const MapDetailItem = ({title, address, number}) => {
  return (  
    <div className='map-detail-item'>
      <Typography variant='h3' >{title}</Typography>
      <Typography variant='h3' >{address}</Typography>
      <Typography variant='h3' startIcon={<LocalPhoneOutlinedIcon />} >{number}</Typography>
    </div>
  )
}

export default MapDetailItem