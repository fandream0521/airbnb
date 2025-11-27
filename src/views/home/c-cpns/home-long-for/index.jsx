import React, { memo } from 'react'
import { LongForWrapper } from './style'
import SectionHeader from '@/components/section-header'
import ScrollView from '@/base-ui/scroll-view';

const HomeLongFor = memo(({listInfo}) => {
  const { title, subtitle, list } = listInfo;
  console.log(list)
  return (
    <LongForWrapper $col={4} $gap={10}>
      <SectionHeader title={title} subtitle={subtitle} />
      <ScrollView>
        <ul className="list">
          {
            list.map(item => (
              <li key={item.city} className='item'>
                <div className="cover">
                  <img src={item.picture_url} alt="" />
                  <div className="bg"></div>
                  <div className="info">
                    <div className="city">{item.city}</div>
                    <div className="price">均价 {item.price}</div>
                  </div>
                </div>
              </li>
            ))
          }
        </ul>
      </ScrollView>
    </LongForWrapper>
  )
})

export default HomeLongFor