import AppHeader from '@/components/app-header'
import React from 'react'
import { EntireWrapper } from './style'

export default function Entire() {
  return (
    <EntireWrapper>
      <AppHeader />
      <div className="content">
        <div className="filter">
          filter
        </div>
        <div className="rooms">
          rooms
        </div>
        <div className="pagination">
          pagination
        </div>
      </div>
    </EntireWrapper>
  )
}
