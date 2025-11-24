import React, { memo } from 'react'
import { HouseListWrapper } from './style'
import SectionHeader from '../section-header';
import RoomItem from '../room-item';

const HouseList = memo(({listInfo}) => {
  const {title, subtitle, list} = listInfo;
  return (
    <HouseListWrapper >
      <SectionHeader title={title} subtitle={subtitle} />
      <ul className="house-list">
        {
          list?.slice(0, 8)?.map(item => (
            <li key={item.id} className='item'>
              <RoomItem item={item}/>
            </li>
          ))
        }
      </ul>
      <footer className="house-list">

      </footer>
    </HouseListWrapper>
  )
})

export default HouseList