import React, { memo } from 'react'
import { HomeSectionV1Wrapper } from './style'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import SectionFooter from '@/components/section-footer'

const HomeSectionV1 = memo(({listInfo}) => {
  const {title, subtitle, list} = listInfo;
  return (
    <HomeSectionV1Wrapper>
      <SectionHeader title={title} subtitle={subtitle} />
      <SectionRooms list={list} />
      <SectionFooter/>
    </HomeSectionV1Wrapper>
  )
})

export default HomeSectionV1