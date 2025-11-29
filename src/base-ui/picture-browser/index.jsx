import React, { memo, useRef, useState } from 'react'
import { PictureBrowserWrapper } from './style'
import { CloseOutlined } from '@ant-design/icons'
import Indictor from '../indicator'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import { Carousel } from 'antd'
import classNames from 'classnames'

const PictureBrowser = memo(({pictures, picIdx, onCloseClick}) => {
  const [curIdx, setCurIdx] = useState(picIdx);
  const [isShowList, setShowList] = useState(true);
  const slickRef = useRef(null);
  const listRef = useRef(null);
  const listHeightRef = useRef(0);

  function handleArrowClick(isNext = true) {
    const length = pictures.length;
    if (isNext) {
      setCurIdx((curIdx + 1) % length)
      slickRef.current.next();
    } else {
      setCurIdx((curIdx - 1 + length) % length);
      slickRef.current.prev();
    }
  }

  function handleListShowClick() {
    if (listRef.current.clientHeight > 0) {
      listHeightRef.current = listRef.current.clientHeight;
    }
    if (!isShowList) {
      listRef.current.style.maxHeight = listHeightRef.current + 'px';
    } else {
      listRef.current.style.maxHeight = 0;
    }
    setShowList(!isShowList);
  }
  return (
    <PictureBrowserWrapper $isShowList={isShowList}>
      <div className="close" onClick={onCloseClick}>
        <CloseOutlined />
      </div>
      <div className="show-content">
        <div className="screen">
          <Carousel dots={false} infinite={true} ref={slickRef}>
            {
              pictures.map(item => (
                <div className='item' key={item}>
                  <img src={item} alt="" />
                </div>
              ))
            }
          </Carousel>
        </div>
        <div className="left" onClick={() => handleArrowClick(false)}>
          <IconArrowLeft size={100} />
        </div>
        <div className="right" onClick={() => handleArrowClick(true)}>
          <IconArrowRight size={100} />
        </div>
      </div>
      <div className="indicator">
        <div className="desc">
          <p className="left">
            {curIdx + 1} / {pictures.length}:  Bright & Quiet Double room Next To Kings X St图片1
          </p>
          <p className="right" onClick={handleListShowClick}>
            隐藏图片列表
          </p>
        </div>
        <div className="indicator-list" ref={listRef}>
          <Indictor selectIdx={curIdx} dots={7}>
            {
              pictures.map((item, idx) => (
                <div key={item} className={classNames('item', {active: idx === curIdx})}>
                  <div className="cover">
                    <img src={item} alt='' />
                    <div className="mask"></div>
                  </div>
                </div>
              ))
              }
          </Indictor>
        </div>
      </div>
    </PictureBrowserWrapper>
  )
})

export default PictureBrowser