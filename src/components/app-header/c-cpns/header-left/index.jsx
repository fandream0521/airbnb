import React, { memo } from 'react'
import { HeaderLeftWrapper } from './style'
import IconLogo from '@/assets/svg/icon_logo'

const HeaderLeft = memo(({reverse}) => {
  return (
    <HeaderLeftWrapper $reverse={reverse}>
      <h1 className="logo">
        <p className="text">爱彼迎 | 度假屋、小木屋、海滨住宅等</p>
        <IconLogo />
        
      </h1>
    </HeaderLeftWrapper>
  )
})

export default HeaderLeft