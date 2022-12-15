import React from 'react'
import SideMenuItem from '../SideMenuItem/SideMenuItem'


const SideMenu = ({sideMenuItems}) => {
  return (
    <div style={{width: '300px', position: 'fixed', top: 150, left: -160}}>{sideMenuItems.map((item,index) => {
        return <SideMenuItem image={item.image} isActive={item.isActive} key={index} />
    }) }</div>
  )
}

export default SideMenu