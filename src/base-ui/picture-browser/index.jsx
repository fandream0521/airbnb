import React, { memo, useRef, useState } from 'react'
import { PictureBrowserWrapper } from './style'
import { CloseOutlined } from '@ant-design/icons'
import Indictor from '../indicator'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import classNames from 'classnames'
import { CSSTransition, SwitchTransition } from 'react-transition-group'

const PictureBrowser = memo(({pictures, picIdx, onCloseClick}) => {
  const [curIdx, setCurIdx] = useState(picIdx);
  const [isShowList, setShowList] = useState(true);
  const [isNext, setNext] = useState(true);
  const listRef = useRef(null);
  const listHeightRef = useRef(0);
  const nodeRef = useRef(null);

  function handleArrowClick(isNext = true) {
    const length = pictures.length;
    if (isNext) {
      setCurIdx((curIdx + 1) % length)
      setNext(true);
    } else {
      setCurIdx((curIdx - 1 + length) % length);
      setNext(false);
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
    <PictureBrowserWrapper $isShowList={isShowList} $isNext={isNext}>
      <div className="close" onClick={onCloseClick}>
        <CloseOutlined />
      </div>
      <div className="show-content">
        <SwitchTransition mode='out-in'>
          <CSSTransition 
            key={curIdx} 
            classNames='pic'
            timeout={400}
            nodeRef={nodeRef}
            >
            <div className="cover" ref={nodeRef}>
              <img src={pictures[curIdx]} alt="" />
            </div>
          </CSSTransition>
        </SwitchTransition>

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
            {isShowList ? "隐藏" : "显示"}图片列表
          </p>
        </div>
        <div className="indicator-list" ref={listRef}>
          <Indictor selectIdx={curIdx} dots={7}>
            {
              pictures.map((item, idx) => (
                <div key={item} className={classNames('item', {active: idx === curIdx})}>
                  <div className="cover" onClick={() => setCurIdx(idx)}>
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