import React from 'react'
import SideMenuItem from '../SideMenuItem/SideMenuItem'


const SideMenu = ({sideMenuItems, currentId}) => {
  return (
    <div style={{width: '100%', position: 'sticky', top: 200, left: 20, }}>{sideMenuItems.map((item, index) => {
        return <SideMenuItem image={item.image} name={item.name} isActive={currentId} key={index} />
    }) }</div>
  )
}

export default SideMenu