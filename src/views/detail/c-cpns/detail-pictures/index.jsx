import React, { memo, useState } from 'react'
import { DetailPicturesWrapper } from './style'
import PictureBrowser from '@/base-ui/picture-browser'

const DetailPictures = memo(({pictures}) => {
  const [isBrowser, setBrowser] = useState(false);
  const [picIdx, setPicIdx] = useState(0);

  function handlePictureClick(idx) {
    console.log(idx)
    setPicIdx(idx);
    setBrowser(true);
  }

  function handleBrowserCloser() {
    setBrowser(false);
  }
  return (
    <DetailPicturesWrapper>
      <div className="content">
        <div className="left" onClick={() => handlePictureClick(0)}>
          <img src={pictures[0]} alt="" />
          <div className="mask"></div>
        </div>
        <div className="right">
          {
            pictures.slice(1, 5).map((pic, idx) => (
              <div className="item" key={pic} onClick={() => handlePictureClick(idx+1)}>
                <img src={pic} alt="" />
                <div className="mask"></div>
              </div>
            ))
          }
        </div>
      </div>
      {
        isBrowser && <PictureBrowser pictures={pictures} picIdx={picIdx} onCloseClick={handleBrowserCloser}/>
      }
    </DetailPicturesWrapper>
  )
})

export default DetailPictures