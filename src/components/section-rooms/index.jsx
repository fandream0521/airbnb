import React, { memo } from 'react'
import { SectionRoomsWrapper } from './style'
import RoomItem from '../room-item'

const SectionRooms = memo(({list, col = 4, gap = 16}) => {
  return (
    <SectionRoomsWrapper $col={col} $gap={gap}>
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