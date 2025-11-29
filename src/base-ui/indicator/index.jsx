import React, { memo, useEffect, useRef } from 'react'
import { IndicatorWrapper } from './style'

const Indictor = memo(({children, selectIdx = 0, dots}) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    let items = scrollRef.current.children;
    if (items.length === 1) {
      items = items[0].children;
    }

    let scrollDistance = items[selectIdx].offsetLeft + (items[selectIdx].clientWidth / 2) - scrollRef.current?.clientWidth / 2;
    if (scrollDistance < 0) {
      scrollDistance = 0
    }

    if (scrollRef.current.scrollWidth - scrollDistance < scrollRef.current.clientWidth) {
      scrollDistance = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
    }

    scrollRef.current.style.transform = `translateX(${-scrollDistance}px)`;
  }, [selectIdx])

  return (
    <IndicatorWrapper $dots={dots}>
      <div className="content" ref={scrollRef}>
        {children}
      </div>
    </IndicatorWrapper>
  )
})

export default Indictor