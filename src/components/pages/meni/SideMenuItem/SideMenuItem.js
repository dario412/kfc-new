import React from 'react'

const SideMenuItem = ({isActive, image}) => {
  return (
    <div className={isActive ? 'show side-menu-item' : 'side-menu-item'}>
        <img src={image} />
    </div>
  )
}

export default SideMenuItem