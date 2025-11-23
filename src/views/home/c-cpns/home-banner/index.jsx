import React, { memo } from 'react'
import { HomeBannerWrapper } from './style'
import cover from "@/assets/img/cover_01.jpeg"


const HomeBanner = memo(() => {
  return (
    <HomeBannerWrapper>
      <img src={cover} alt='cover' />
    </HomeBannerWrapper>
  )
})

export default HomeBanner