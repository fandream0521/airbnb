import React, { memo } from 'react'
import { RoomItemWrapper } from './style'

const RoomItem = memo(({item}) => {
  return (
    <RoomItemWrapper>
      <div className="cover">
        <img src={item.picture_url} alt="" />
      </div>
    </RoomItemWrapper>
  )
})

export default RoomItem