import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import React, { memo, useCallback, useState } from 'react'
import { HomeSectionV2Wrapper } from './style'
import SectionTabs from '@/components/section-tabs'
import SectionFooter from '@/components/section-footer'

const HomeSectionV2 = memo(({listInfo}) => {
  const { title, subtitle, dest_list, dest_address} = listInfo;
  const tabNames = dest_address.map(address => address.name);
  const [name, setName] = useState(tabNames[0]);

  const handleTabClick = useCallback((idx, name) => {
    setName(name);
  }, [setName])


  return (
    <HomeSectionV2Wrapper>
      <SectionHeader title={title} subtitle={subtitle}/>
      <SectionTabs tabNames={tabNames} onTabClick={handleTabClick}/>
      <SectionRooms list={dest_list[name]} col={3}/>
      <SectionFooter name={name} />
    </HomeSectionV2Wrapper>
  )
})

export default HomeSectionV2