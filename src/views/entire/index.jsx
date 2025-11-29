import AppHeader from '@/components/app-header'
import React, { useCallback, useEffect, useState } from 'react'
import { EntireWrapper } from './style'
import EntireFilter from './entire-filter'
import EntireRooms from './entire-rooms'
import EntirePagination from './entire-pagination'
import { useDispatch, useSelector } from 'react-redux'
import { fetchEntireList } from '@/store/modules/entire'

export default function Entire() {
  const dispatch = useDispatch();
  const { list, totalCount, pageSize } = useSelector(state => state.entire)
  const [curPage, setCurPage] = useState(1);

  const pageCount = Math.ceil(totalCount / pageSize);

  const onPageChange = useCallback((e, val) => {
    setCurPage(val);
  }, [setCurPage])

  useEffect(() => {
    dispatch(fetchEntireList(curPage))
    window.scroll({
      top: 0
    })
  }, [dispatch, curPage])
  return (
    <EntireWrapper>
      <AppHeader />
      <main className="entire">
        <EntireFilter />
        <EntireRooms list={list}/>
        <EntirePagination onPageChange={onPageChange} curPage={curPage} count={pageCount}/>
      </main>
    </EntireWrapper>
  )
}
