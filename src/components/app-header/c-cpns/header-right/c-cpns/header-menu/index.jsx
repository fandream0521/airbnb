import React, { memo } from 'react'
import { HeaderMenuWrapper } from './style'

const HeaderMenu = memo(() => {

  return (
    <HeaderMenuWrapper>
      <ul className="log-reg">
        <li className="item">注册</li>
        <li className="item">登录</li>
      </ul>
      <ul className="other">
        <li className="item">出租房源</li>
        <li className="item">开展体验</li>
        <li className="item">帮助</li>
      </ul>
    </HeaderMenuWrapper>
  )
})

export default HeaderMenu