import React, { memo, useEffect, useRef, useState } from 'react'
import { ScrollViewWrapper } from './style'
import IconArrowLeft from '@/assets/svg/icon-arrow-left';
import IconArrowRight from '@/assets/svg/icon-arrow-right';

const ScrollView = memo(({children}) => {
  const scrollRef = useRef(null);
  const [offsetList, setOffsetList] = useState([]);
  const [offsetIdx, setOffsetIdx] = useState(0);
  const [isLeftBtnShow, setLeftBtnShow] = useState(false);
  const [isRightBtnShow, setRightBtnShow] = useState(false);

  function controlBtnClick(step) {
    const nextIdx = offsetIdx + step
    setOffsetIdx(nextIdx);
    setRightBtnShow(scrollRef.current.scrollWidth - offsetList[nextIdx] > scrollRef.current.clientWidth)
    console.log(scrollRef.current.scrollWidth, offsetList[nextIdx] ,scrollRef.current.clientWidth)
    setLeftBtnShow(nextIdx > 0);
  }

  useEffect(() => {
    let children = scrollRef.current.children;

    if (children.length === 1) {
      children = children[0].children;
    }

    const offsetList = [];
    for (const item of children) {
      offsetList.push(item.offsetLeft)
    }
    setOffsetList(offsetList);
    setRightBtnShow(scrollRef.current.scrollWidth  > scrollRef.current.clientWidth)
  }, [setOffsetList, children, setRightBtnShow])

  return (
    <ScrollViewWrapper >
      <div className="scroll-content">
        <div className="scroll-inner" ref={scrollRef} style={{ transform: `translateX(-${offsetList[offsetIdx]}px)`}}>
          {children}
        </div>
      </div>
      {
        isLeftBtnShow && (
          <div className="left" onClick={() => controlBtnClick(-1)}>
            <IconArrowLeft />
          </div>
        )
      }
      {
        isRightBtnShow && (
          <div className="right" onClick={() => controlBtnClick(1)}>
            <IconArrowRight />
          </div>
        )
      }
    </ScrollViewWrapper>
  )
})

export default ScrollView