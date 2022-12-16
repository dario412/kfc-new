import React from 'react'
import { Typography } from '@mui/material';
import './FoodItem.css';

const FoodItem = ({image, title}) => {
  return (
    <a href='/single'>
    <div className='food_item'>
        <img src={image} />
        <Typography variant='h3'>{title}</Typography>
    </div>
    </a>
  )
}

export default FoodItem