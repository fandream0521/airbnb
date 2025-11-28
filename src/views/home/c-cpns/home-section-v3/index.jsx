import React, { memo } from 'react'
import { HomeSectionV3Wrapper } from './style'
import SectionHeader from '@/components/section-header';
import ScrollView from '@/base-ui/scroll-view';
import RoomItem from '@/components/room-item';
import SectionFooter from '@/components/section-footer';

const HomeSectionV3 = memo(({listInfo, name}) => {
  const {title, subtitle, list, type} = listInfo;
  return (
    <HomeSectionV3Wrapper $col={5} $gap={16}>
      <SectionHeader title={title} subtitle={subtitle} />
      <ScrollView>
        <ul className="list">
          {
            list.map(item => (
              <li key={item.id} className='item'>
                <RoomItem item={item} />
              </li>
            ))
          }
        </ul>
      </ScrollView>
      <SectionFooter name={name} type={type}/>
    </HomeSectionV3Wrapper>
  )
})

export default HomeSectionV3