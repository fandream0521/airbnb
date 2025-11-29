import React, { memo, useCallback } from 'react'
import { EntireRoomsWrapper } from './style'
import RoomItem from '@/components/room-item'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { changeDetailInfo } from '@/store/modules/detail'

const EntireRooms = memo(({list}) => {
  const { totalCount, isLoading } = useSelector(state => state.entire)

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleItemClick = useCallback((item) => {
    dispatch(changeDetailInfo(item))
    navigate("/detail?id=" + item.id)
  }, [navigate, dispatch]);
  return (
    <EntireRoomsWrapper>
      <h2 className="title">共{totalCount}多处住所</h2>
      <ul className="list">
        {
          list.map(item => (
            <li key={item.id} className='item'>
              <RoomItem item={item} onItemClick={handleItemClick}/>
            </li>
          ))
        }
      </ul>
      {
        isLoading && (
          <div className="mask"> </div>     
        )
      }
      
    </EntireRoomsWrapper>
  )
})

export default EntireRooms