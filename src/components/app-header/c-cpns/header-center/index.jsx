import React, { memo } from 'react'
import { HeaderCenterWrapper } from './style'
import IconSearchBar from '@/assets/svg/icon-search-bar'

const HeaderCenter = memo((reverse) => {
  return (
    <HeaderCenterWrapper>
      <div className="search">
        <span className="text">
          搜索房源和体验
        </span>
        <div className="icon">
          <IconSearchBar />
        </div>
      </div>
    </HeaderCenterWrapper>
  )
})

export default HeaderCenter