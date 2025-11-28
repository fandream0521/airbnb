import AppHeader from '@/components/app-header'
import React from 'react'
import { EntireWrapper } from './style'
import EntireFilter from './entire-filter'
import EntireRooms from './entire-rooms'
import EntirePagination from './entire-pagination'

export default function Entire() {
  return (
    <EntireWrapper>
      <AppHeader />
      <main className="entire">
        <EntireFilter />
        <EntireRooms />
        <EntirePagination />
      </main>
    </EntireWrapper>
  )
}
