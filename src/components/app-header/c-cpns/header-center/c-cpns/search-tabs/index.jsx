import React, { memo, useState } from 'react'
import { SearchTabsWrapper } from './style'
import classNames from 'classnames';

const SearchTabs = memo(({tabs, onTabClick}) => {
  const [curActiveIdx, setActiveIdx] = useState(0);

  function handleTabClick(idx) {
    setActiveIdx(idx);
    if (onTabClick) {
      onTabClick(idx);
    }
  }
  return (
    <SearchTabsWrapper>
      <ul className="list">
        {
          tabs.map((item, idx) => (
            <li key={item} className={classNames('item', { active: curActiveIdx === idx})} onClick={() => handleTabClick(idx)}>
              <span className="text">
                {item}
              </span>
            </li>
          ))
        }
      </ul>
    </SearchTabsWrapper>
  )
})

export default SearchTabs