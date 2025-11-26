import React, { memo, useState } from 'react'
import { SectionTabsWrapper } from './style'

const SectionTabs = memo(({tabNames, onTabClick}) => {
  const [curActive, setActive] = useState(0);
  function handleTabClick(idx, name) {
    setActive(idx);
    onTabClick(idx, name);
  }
  return (
    <SectionTabsWrapper>
      {
        tabNames.map((item, index) => (
          <li key={item} onClick={() => handleTabClick(index, item)}
            className={`item${curActive === index ? " active" : ""}`} >{item}</li>
        ))
      }
    </SectionTabsWrapper>
  )
})

export default SectionTabs