import React, { memo } from 'react'
import { HouseListWrapper } from './style'
import SectionHeader from '../section-header';
import SectionRooms from '../section-rooms';

const HouseList = memo(({listInfo}) => {
  const {title, subtitle, list} = listInfo;
  return (
    <HouseListWrapper >
      <SectionHeader title={title} subtitle={subtitle} />
      <SectionRooms list={list} />
      <footer className="more">
        
      </footer>
    </HouseListWrapper>
  )
})

export default HouseList