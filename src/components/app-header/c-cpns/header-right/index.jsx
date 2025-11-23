import React, { memo, useEffect, useState } from 'react'
import { HeaderRightWrapper } from './style'
import IconGlobal from '@/assets/svg/icon_global'
import IconMenu from '@/assets/svg/icon_menu'
import IconAvatar from '@/assets/svg/icon_avatar'
import HeaderMenu from './c-cpns/header-menu'

const HeaderRight = memo(({reverse}) => {
  const [showMenu, setShowMenu] = useState(false);

  function handleProfileClick(e) {
    e.stopPropagation();
    setShowMenu(!showMenu)
  }

  useEffect(() => {
    function handleWindowClick(e) {
      if (showMenu) {
        setShowMenu(false);
      }
    }
    window.addEventListener('click', handleWindowClick);
    return () => window.removeEventListener('click', handleWindowClick);
  })
  return (
    <HeaderRightWrapper $reverse={reverse}>
      <div className="btns">
        <span className="login">登录</span>
        <span className="register">注册</span>
        <span className="online">
          <IconGlobal />
        </span>
      </div>
      <div className="profile" onClick={handleProfileClick}>
        <div className="menu">
          <IconMenu />
        </div>
        <div className="avatar">
          <IconAvatar />
        </div>
        {
          showMenu && (
            <div className="menu-list">
              <HeaderMenu/>
            </div>
          )
        }
        
      </div>
    </HeaderRightWrapper>
  )
})

export default HeaderRight