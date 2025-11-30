import React, { memo } from 'react'
import { SearchSectionWrapper } from './style'

const SearchSection = memo(({searchInfos, reverse}) => {
  return (
    <SearchSectionWrapper $reverse={reverse}>
      {
        searchInfos.map(info => (
          <div className="item" key={info.title}>
            <h5 className="title">
              {info.title}
            </h5>
            <p className="desc">
              {info.desc}
            </p>
          </div>
        ))
      }
    </SearchSectionWrapper>
  )
})

export default SearchSection