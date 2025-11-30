import React, { memo, useEffect, useState } from 'react'

import { AppHeaderWrapper } from './style'
import HeaderRight from './c-cpns/header-right'
import HeaderCenter from './c-cpns/header-center'
import HeaderLeft from './c-cpns/header-left'
const AppHeader = memo(({fixed, reverse}) => {
  const [isSearch, setSearch] = useState(true);

  useEffect(() => {
    if (reverse === 0) {
      setSearch(false);
    } else {
      setSearch(true);
    }
  }, [reverse])
  return (
    <AppHeaderWrapper $fixed={fixed} $reverse={reverse} $isSearch={isSearch}>
      <div className="content">
        <div className="top">
          <HeaderLeft reverse={reverse}/>
          <HeaderCenter reverse={reverse} isSearch={isSearch} onSearchBarClick={() => setSearch(true)}/>
          <HeaderRight reverse={reverse}/>
        </div>
        <div className="search-area">

        </div>
      </div>
      {
        (isSearch && reverse === 0) && (<div className="cover" onClick={(e) => {e.stopPropagation(); setSearch(false)}}></div>)
      }
    </AppHeaderWrapper>
  )
})

export default AppHeader