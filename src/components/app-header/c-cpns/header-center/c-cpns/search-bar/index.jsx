import IconSearchBar from '@/assets/svg/icon-search-bar'
import React, { memo } from 'react'
import { SearchBarWrapper } from './style'

const SearchBar = memo(() => {
  return (
    <SearchBarWrapper>
      <span className="text">
        搜索房源和体验
      </span>
      <div className="icon">
        <IconSearchBar />
      </div>
    </SearchBarWrapper>
  )
})

export default SearchBar