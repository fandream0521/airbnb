import React, { memo } from 'react'
import { SectionRoomsWrapper } from './style'
import RoomItem from '../room-item'

const SectionRooms = memo(({list}) => {
  return (
    <SectionRoomsWrapper>
      {
        list?.slice(0, 8)?.map(item => (
          <li key={item.id} className='item'>
            <RoomItem item={item}/>
          </li>
        ))
      }
    </SectionRoomsWrapper>
  )
})

export default SectionRooms