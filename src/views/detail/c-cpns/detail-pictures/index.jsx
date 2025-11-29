import React, { memo } from 'react'
import { DetailPicturesWrapper } from './style'

const DetailPictures = memo(({pictures}) => {
  return (
    <DetailPicturesWrapper>
      <div className="left">
        <img src={pictures[0]} alt="" />
        <div className="mask"></div>
      </div>
      <div className="right">
        {
          pictures.slice(1, 5).map(pic => (
            <div className="item" key={pic}>
              <img src={pic} alt="" />
              <div className="mask"></div>
            </div>
          ))
        }
      </div>
    </DetailPicturesWrapper>
  )
})

export default DetailPictures