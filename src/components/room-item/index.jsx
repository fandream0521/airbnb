import React, { memo } from 'react'
import { RoomItemWrapper } from './style'
import { Rating } from '@mui/material'
const RoomItem = memo(({item}) => {
  return (
    <RoomItemWrapper>
      <div className="cover">
        <img src={item.picture_url} alt="" />
      </div>
      <div className="info">
        <p className="desc" style={{color: item.verify_info?.text_color ?? '#767676'}}>
          {item.verify_info.messages.join(".")}
        </p>
        <h4 className="name">
          {item.name}
        </h4>
        <p className="price">
          ￥{item.price}/晚
        </p>
        <div className="bottom">
          <Rating name="half-rating-read" defaultValue={item.reviews_count ?? 5} precision={0.5} readOnly sx={{
            fontSize: 12,
            color: item.star_rating_color,
          }}/>  
          {
            item.bottom_info?.content && (
              <>
              <span className="dot">·</span>
              <span style={{
                fontSize: item.bottom_info?.font_size + 'px',
                color: item.bottom_info?.content_color,
              }}>{item.bottom_info?.content}</span>
              </>
            )
          }
        </div>
      </div>
    </RoomItemWrapper>
  )
})

export default RoomItem