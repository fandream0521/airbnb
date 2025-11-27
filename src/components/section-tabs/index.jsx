import React, { memo, useState } from 'react'
import { SectionTabsWrapper } from './style'
import ScrollView from '@/base-ui/scroll-view';

const SectionTabs = memo(({tabNames, onTabClick}) => {
  const [curActive, setActive] = useState(0);
  function handleTabClick(idx, name) {
    setActive(idx);
    onTabClick(idx, name);
  }
  return (
    <SectionTabsWrapper>
      <ScrollView>
        <ul className="list">
          {
            tabNames.map((item, index) => (
              <li key={item} onClick={() => handleTabClick(index, item)}
                className={`item${curActive === index ? " active" : ""}`} >{item}</li>
            ))
          }
        </ul>
      </ScrollView>
    </SectionTabsWrapper>
  )
})

export default SectionTabs