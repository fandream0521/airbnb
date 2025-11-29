import React, { memo } from 'react'
import { HeaderLeftWrapper } from './style'
import IconLogo from '@/assets/svg/icon_logo'
import { useNavigate } from 'react-router-dom'

const HeaderLeft = memo(({reverse}) => {
  const navigate = useNavigate();
  
  function handleLogoClick() {
    navigate("/")
  }
  return (
    <HeaderLeftWrapper $reverse={reverse}>
      <h1 className="logo" onClick={handleLogoClick}>
        <p className="text">爱彼迎 | 度假屋、小木屋、海滨住宅等</p>
        <IconLogo />
        
      </h1>
    </HeaderLeftWrapper>
  )
})

export default HeaderLeft