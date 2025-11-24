import React, { memo } from 'react'
import { SectionHeaderWrapper } from './style'
import IconArrowRight from '@/assets/svg/icon-arrow-right'

const SectionHeader = memo(({title, subtitle}) => {
  return (
    <SectionHeaderWrapper>
      <div className="titles">
        <h2 className="title">{title}</h2>
        {subtitle && <h5 className='subtitle'>{subtitle}</h5>}
        <div className="arrow">
          <IconArrowRight />
        </div>
      </div> 
    </SectionHeaderWrapper>
  )
})

export default SectionHeader