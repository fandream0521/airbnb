import React, { memo } from 'react'
import { SectionFooterWrapper } from './style'
import IconArrowRight from '@/assets/svg/icon-arrow-right'

const SectionFooter = memo(({name}) => {
  return (
    <SectionFooterWrapper>
      <div className="info">
        {!name && <span className="text">显示全部</span>}
        {name && <span className="text active" >显示全部{name}房源</span>}
        <IconArrowRight />
      </div>
    </SectionFooterWrapper>
  )
})

export default SectionFooter