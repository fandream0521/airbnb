import React, { memo } from 'react'
import { EntirePaginationWrapper } from './style'
import { Pagination } from '@mui/material'
import { useSelector } from 'react-redux'

const EntirePagination = memo(({curPage, onPageChange, count}) => {
  const { pageSize, totalCount } = useSelector(state => state.entire);
  const begin = (curPage - 1) * pageSize + 1;
  const end = curPage * pageSize;
  return (
    <EntirePaginationWrapper>
      <Pagination count={count}  page={curPage} onChange={onPageChange} color='primary'/>
      <div className="desc">
        第 {begin} - {end} 个房源，共超过 {totalCount} 个
      </div>
    </EntirePaginationWrapper>
  )
})

export default EntirePagination