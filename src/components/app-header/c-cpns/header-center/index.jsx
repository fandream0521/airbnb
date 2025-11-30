import React, { memo, useRef, useState } from 'react'
import { HeaderCenterWrapper } from './style'
import SearchSection from './c-cpns/search-section'
import SearchTabs from './c-cpns/search-tabs'
import searchTitles from "@/assets/data/search_titles.json"
import SearchBar from './c-cpns/search-bar'
import { CSSTransition } from 'react-transition-group'

const HeaderCenter = memo(({reverse, isSearch, onSearchBarClick}) => {
  const [idx, setIdx] = useState(0);
  const barRef = useRef();
  const tabsRef =useRef();
  const titles = searchTitles.map(item => item.title);
  const searchInfos = searchTitles.map(item => item.searchInfos);
  function handleTabClick(idx) {
    setIdx(idx);
  }
  console.log(isSearch)
  return (
    <HeaderCenterWrapper>
      <CSSTransition in={!isSearch} classNames="bar" timeout={250} nodeRef={barRef} unmountOnExit>
        <div className="search-bar" onClick={onSearchBarClick} ref={barRef}>
          <SearchBar />
        </div>
      </CSSTransition>
      <CSSTransition in={isSearch} classNames="tabs" timeout={250} nodeRef={tabsRef} unmountOnExit>
        <div className="tabs" ref={tabsRef}>
          <SearchTabs tabs={titles} onTabClick={handleTabClick}/>
          <div className="infos">
            <SearchSection searchInfos={searchInfos[idx]} reverse={reverse}/>
          </div>
        </div>
      </CSSTransition>
    </HeaderCenterWrapper>
  )
})

export default HeaderCenter