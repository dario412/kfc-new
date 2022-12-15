import React from 'react'
import FoodItem from '../FoodItem/FoodItem'
import './FoodList.css'

const FoodList = ({foodList}) => {
    if(!foodList) {return null;}
 return  (
    <div className='food_list'>{foodList.map((item,index) => {
        return <FoodItem image={item.image} title={item.title} key={index} />
    }) }</div>
  )
}

export default FoodList