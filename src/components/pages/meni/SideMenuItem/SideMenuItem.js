import React from 'react'
import './SideMenuItem.css'

const SideMenuItem = ({isActive, name, image}) => {
  return (
    <div className={isActive==name ? 'show side-menu-item' : 'side-menu-item'}>
        <img src={image} />
    </div>
  )
}

export default SideMenuItem